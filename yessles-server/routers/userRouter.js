const authentication = require("../middlewares/authentication");
const UserStatic = require("../controllers/userStatic");
const { authorizationRole } = require("../middlewares/authorization");
const router = require("express").Router();

router.post("/login", UserStatic.userLogin);
router.post("/register", UserStatic.userRegister);

router.use(authentication);

router.put("/edit-user/:UserId", UserStatic.userUpdate);
router.get("/get-user-id", UserStatic.userGetById);
router.get("/get-user", authorizationRole, UserStatic.userGetAll);
router.delete("/delete-user/:UserId", authorizationRole, UserStatic.userDelete);
router.patch("/status-user/:UserId", authorizationRole, UserStatic.userSetUser);

// router.patch(
//   "/update-profile-picture/:id",
//   authentication,
//   middlewareUpload,
//   UserStatic.userUpdateImage
// );

module.exports = router;
