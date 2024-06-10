const authentication = require("../middlewares/authentication");
const ArticleStatistic = require("../controllers/articleStatic");
const {
  authorizationArticle,
  authorizationRole,
} = require("../middlewares/authorization");
const router = require("express").Router();

router.get("/article-active", ArticleStatistic.articleGetAllActive);

router.use(authentication);

router.get("/", ArticleStatistic.articleGetAll);
router.get(
  "/article-get/:articleId",
  authorizationArticle,
  ArticleStatistic.articleGetById
);
router.post("/", ArticleStatistic.articleCreate);
router.put("/:articleId", authorizationArticle, ArticleStatistic.articleUpdate);
router.patch(
  "/article-status/:articleId",
  authorizationRole,
  ArticleStatistic.articleChangeStatus
);
router.delete(
  "/:articleId",
  authorizationArticle,
  ArticleStatistic.articleDelete
);

module.exports = router;
