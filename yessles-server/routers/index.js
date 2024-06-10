const router = require("express").Router();

const authentication = require("../middlewares/authentication");
const articleRouter = require("./articleRouter");
const userRouter = require("./userRouter");

router.use("/user", userRouter);
router.use("/article", articleRouter);

module.exports = router;
