const { imagekitApi, imagekitDeleteApi } = require("../api/imageKitApi");
const { Article, User } = require("../models");
const { Op, where } = require("sequelize");
const multer = require("multer");
const createSlug = require("../helpers/slugcreator");

class ArticleStatic {
  static async articleGetAll(req, res, next) {
    try {
      const { role, id } = req.user;
      const { page = 1, limit = 100, search = "" } = req.query;

      const pageNum = parseInt(page, 10);
      const limitNum = parseInt(limit, 10);

      const offset = (pageNum - 1) * limitNum;
      let where;

      role == "admin"
        ? (where = search
            ? {
                title: {
                  [Op.iLike]: `%${search}%`,
                },
              }
            : {})
        : (where = search
            ? {
                title: {
                  [Op.iLike]: `%${search}%`,
                },
                UserId: id,
              }
            : { UserId: id });

      const { rows, count } = await Article.findAndCountAll({
        where,
        order: [["updatedAt", "DESC"]],
        limit: limitNum,
        offset,
        include: [
          {
            model: User,
            attributes: {
              exclude: ["createdAt", "updatedAt", "password", "status"],
            },
          },
        ],
      });

      const totalPages = Math.ceil(count / limitNum);

      res.status(200).json({
        message: "Success Get All Articles",
        data: {
          items: rows,
          totalPages,
          currentPage: pageNum,
          totalArticles: count,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  static async articleGetById(req, res, next) {
    try {
      const { articleId } = req.params;

      const findArticle = await Article.findOne({
        where: { id: articleId },
        attributes: {
          exclude: ["createdAt", "updatedAt", "password"],
        },
        include: [
          {
            model: User,
            attributes: {
              exclude: ["createdAt", "updatedAt", "password", "status"],
            },
          },
        ],
      });
      if (!findArticle) throw { name: "NotFound" };

      res.status(200).json({
        message: `Success Get Articles with ${findArticle.title}`,
        data: findArticle,
      });
    } catch (error) {
      next(error);
    }
  }

  static async articleGetAllActive(req, res, next) {
    try {
      const { page = 1, limit = 20, search = "" } = req.query;

      const pageNum = parseInt(page, 10);
      const limitNum = parseInt(limit, 10);

      const offset = (pageNum - 1) * limitNum;

      const where = search
        ? {
            title: {
              [Op.iLike]: `%${search}%`,
            },
            status: "ACTIVE",
          }
        : { status: "ACTIVE" };

      const { rows, count } = await Article.findAndCountAll({
        where,
        order: [["updatedAt", "DESC"]],
        limit: limitNum,
        offset,
        include: [
          {
            model: User,
            attributes: {
              exclude: ["createdAt", "updatedAt", "password", "status"],
            },
          },
        ],
      });

      const totalPages = Math.ceil(count / limitNum);

      res.status(200).json({
        message: "Success Get All Active Articles",
        data: {
          items: rows,
          totalPages,
          currentPage: pageNum,
          totalArticles: count,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  static async articleCreate(req, res, next) {
    const storage = multer.memoryStorage();
    const upload = multer({ storage });

    upload.single("thumbnail")(req, res, async function (err) {
      if (err) {
        return next(err);
      }

      try {
        const { title, body, description } = req.body;
        const UserId = req.user.id;

        if (!title) throw { name: `titleEmpty` };
        const checkSlugArticle = await Article.findOne({
          where: { slug: createSlug(title) },
        });
        if (checkSlugArticle) throw { name: `slugAlreadyCreate` };

        if (!body) throw { name: `bodyEmpty` };

        const findUser = await User.findByPk(UserId);
        if (findUser.status === "INACTIVE") throw { name: `userInactive` };

        if (req.file == undefined) throw { name: `thumbnailEmpty` };
        const fileData = req.file.buffer.toString("base64");

        const form = new FormData();
        form.append("file", fileData);
        form.append("fileName", req.file.originalname);

        const { data } = await imagekitApi.post("/files/upload", form);

        await Article.create({
          title,
          body,
          slug: createSlug(title),
          description,
          thumbnail: data.url,
          thumbnail_id: data.fileId,
          status: "PENDING",
          UserId,
        });

        res.status(201).json({
          message: `Success Create Article for ${findUser.email} `,
        });
      } catch (error) {
        next(error);
      }
    });
  }

  static async articleDelete(req, res, next) {
    try {
      const UserId = req.user.id;
      const { articleId } = req.params;

      const findArticle = await Article.findByPk(articleId);
      if (!findArticle) throw { name: "NotFound" };

      await findArticle.destroy();

      res.status(200).json({
        message: `Success Delete Article ${findArticle.title}`,
      });
    } catch (error) {
      next(error);
    }
  }

  static async articleChangeStatus(req, res, next) {
    try {
      const { articleId } = req.params;
      const { status } = req.body;

      const findArticle = await Article.findByPk(articleId);
      if (!findArticle) throw { name: "NotFound" };

      await Article.update({ status }, { where: { id: articleId } });

      res.status(200).json({
        message: `Success Change Status Article id: ${articleId}`,
      });
    } catch (error) {
      next(error);
    }
  }

  static async articleUpdate(req, res, next) {
    const storage = multer.memoryStorage();
    const upload = multer({ storage });

    upload.single("thumbnail")(req, res, async function (err) {
      if (err) {
        return next(err);
      }

      try {
        const { title, body, description } = req.body;
        const { articleId } = req.params;

        let newBody = JSON.stringify(body);

        // const checkSlugArticle = await Article.findOne({
        //   where: { slug: createSlug(title) },
        // });
        // if (checkSlugArticle) throw { name: `slugAlreadyCreate` };

        const findArticle = await Article.findByPk(articleId);
        if (!findArticle) throw { name: "NotFound" };

        if (!req.file) {
          await Article.update(
            {
              title,
              body: newBody,
              description,
              slug: createSlug(title),
              status: "PENDING",
            },
            {
              where: {
                id: articleId,
              },
            }
          );
        } else {
          const fileData = req.file.buffer.toString("base64");

          const form = new FormData();
          form.append("file", fileData);
          form.append("fileName", req.file.originalname);

          if (findArticle.thumbnail_id) {
            await imagekitDeleteApi.delete(
              "/files/" + findArticle.thumbnail_id
            );
          }

          const { data } = await imagekitApi.post("/files/upload", form);

          await Article.update(
            {
              title,
              body: newBody,
              description,
              slug: createSlug(title),
              thumbnail: data.url,
              thumbnail_id: data.fileId,
              status: "PENDING",
            },
            {
              where: {
                id: articleId,
              },
            }
          );
        }

        res.status(200).json({
          message: `Success Update Article ${findArticle.title}`,
        });
      } catch (error) {
        next(error);
      }
    });
  }
}

module.exports = ArticleStatic;
