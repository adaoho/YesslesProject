const authentication = require("../middlewares/authentication");
const middlewareUpload = require("../middlewares/uploadFile");
const UserStatic = require("../controllers/userStatic");
const { authorization } = require("../middlewares/authorization");
const router = require("express").Router();

router.post("/login", UserStatic.userLogin);
router.post("/register", UserStatic.userRegister);

router.use(authentication);

router.put("/edit-user/:UserId", UserStatic.userUpdate);
router.get("/get-user", authorization, UserStatic.userGetAll);
router.delete("/delete-user/:UserId", authorization, UserStatic.userDelete);
router.patch("/status-user/:UserId", authorization, UserStatic.userSetUser);

// router.patch(
//   "/update-profile-picture/:id",
//   authentication,
//   middlewareUpload,
//   UserStatic.userUpdateImage
// );

module.exports = router;
