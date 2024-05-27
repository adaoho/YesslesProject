const router = require("express").Router();

const userRouter = require("./userRouter");
// const authentication = require("../middlewares/authentication");

router.use("/user", userRouter);

// router.use(authentication);

module.exports = router;
