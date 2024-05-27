const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage });
const middlewareUpload = upload.single("profile_picture");

if (!middlewareUpload) throw { name: "imageEmpty" };

module.exports = middlewareUpload;
