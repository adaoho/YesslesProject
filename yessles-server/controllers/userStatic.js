const imagekitApi = require("../api/imageKitApi");
const { comparePassword } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");
const { User } = require("../models");
const { Op } = require("sequelize");
const multer = require("multer");

class UserStatic {
  static async userRegister(req, res, next) {
    try {
      const { full_name, email, password } = req.body;

      if (!email) throw { name: `EmailEmpty` };
      if (!password) throw { name: `PasswordEmpty` };
      if (!full_name) throw { name: `FullNameEmpty` };

      await User.create({
        full_name,
        email,
        password,
        profile_picture:
          "https://ik.imagekit.io/os8mo2ias/yessles_profile.jpeg?updatedAt=1716537504300",
        role: "tutor",
        status: "ACTIVE",
      });

      const newUser = await User.findOne({
        attributes: {
          exclude: ["password", "createdAt", "updatedAt"],
        },
        where: { email },
      });

      res.status(201).json({
        message: `Success Create User ${email}`,
        data: newUser,
      });
    } catch (error) {
      next(error);
    }
  }

  static async userLogin(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email) throw { name: `EmailEmpty` };
      if (!password) throw { name: `PasswordEmpty` };

      const findUser = await User.findOne({ where: { email } });
      if (!findUser) throw { name: "InvalidLogin" };
      if (findUser.status === "INACTIVE") throw { name: "InvalidStatus" };

      const isValidPassword = comparePassword(password, findUser.password);
      if (!isValidPassword) throw { name: "InvalidLogin" };

      const access_token = createToken({
        id: findUser.id,
        email: findUser.email,
        role: findUser.role,
      });

      const userLogin = await User.findOne({
        attributes: {
          exclude: ["password", "createdAt", "updatedAt"],
        },
        where: { email },
      });

      res.status(200).json({
        message: `Success Login Account ${email}`,
        data: {
          access_token,
          role: findUser.role,
          data: userLogin,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  static async userGetAll(req, res, next) {
    try {
      const { page = 1, limit = 100, search = "" } = req.query;

      const pageNum = parseInt(page, 10);
      const limitNum = parseInt(limit, 10);

      const offset = (pageNum - 1) * limitNum;

      const where = search
        ? {
            full_name: {
              [Op.iLike]: `%${search}%`,
            },
          }
        : {};

      const { rows, count } = await User.findAndCountAll({
        where,
        attributes: {
          exclude: ["createdAt", "updatedAt", "password"],
        },
        order: [["id", "ASC"]],
        limit: limitNum,
        offset,
      });

      const totalPages = Math.ceil(count / limitNum);

      res.status(200).json({
        message: "Success Get All User",
        data: {
          items: rows,
          totalPages,
          currentPage: pageNum,
          totalUsers: count,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  static async userDelete(req, res, next) {
    try {
      const { UserId } = req.params;

      const findUser = await User.findByPk(UserId);
      if (!findUser) throw { name: "NotFound" };
      if (findUser.role === "admin") throw { name: "UnableAdmin" };

      await findUser.destroy();

      res.status(200).json({
        message: `Success Delete Account with Email ${findUser.email}`,
      });
    } catch (error) {
      next(error);
    }
  }

  static async userSetUser(req, res, next) {
    try {
      const { UserId } = req.params;
      const { status } = req.body;

      const findUser = await User.findByPk(UserId);
      if (!findUser) throw { name: "NotFound" };
      if (findUser.role === "admin") throw { name: "UnableAdmin" };

      await User.update(
        { status },
        {
          where: {
            id: UserId,
          },
        }
      );

      res.status(200).json({
        message: `Success Change Status to ${status} for ${findUser.email}`,
      });
    } catch (error) {
      next(error);
    }
  }

  static async userUpdate(req, res, next) {
    const storage = multer.memoryStorage();
    const upload = multer({ storage });

    upload.single("profile_picture")(req, res, async function (err) {
      if (err) {
        return next(err);
      }

      try {
        const { full_name } = req.body;
        const { UserId } = req.params;

        const findUser = await User.findByPk(UserId);

        if (!findUser) throw { name: "NotFound" };
        if (findUser.role === "admin") throw { name: "UnableAdmin" };

        if (!req.file) {
          await User.update(
            { full_name },
            {
              where: {
                id: UserId,
              },
            }
          );
        } else {
          const fileData = req.file.buffer.toString("base64");

          // console.log(fileData);

          const form = new FormData();
          form.append("file", fileData);
          form.append("fileName", req.file.originalname);

          const { data } = await imagekitApi.post("/files/upload", form);
          await User.update(
            { full_name, profile_picture: data.url },
            {
              where: {
                id: UserId,
              },
            }
          );
        }

        res.status(200).json({
          message: `Success Update User for ${findUser.email}`,
        });
      } catch (error) {
        next(error);
      }
    });
  }

  static async userUpdateImage(req, res, next) {
    try {
      const { id } = req.params;

      const findUser = await User.findByPk(id);
      if (!findUser) throw { name: "InvalidData" };

      if (!req.file) throw { name: "imageEmpty" };

      const fileData = req.file.buffer.toString("base64");

      const form = new FormData();
      form.append("file", fileData);
      form.append("fileName", req.file.originalname);
      // console.log(form);

      const { data } = await imagekitApi.post("/files/upload", form);

      const updateImage = await User.update(
        { profile_picture: data.url },
        { where: { id } }
      );

      if (updateImage.length === 0) throw { name: "NotFound" };

      res.status(200).json({
        message: `Image for ${findUser.email} success to update`,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserStatic;
