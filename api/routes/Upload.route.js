const express = require('express');
const router = express.Router();
const multer = require("multer"); // for parsing multipart/form-data
const upload = multer();

// middlewares
const APITokenGuard = require("../guards/APIToken.guard");

// controllers
const UploadCtrl = require("../controllers/Upload.ctrl");

// routes
router.put("/", upload.single("file"), APITokenGuard, UploadCtrl.upload);

module.exports = router;