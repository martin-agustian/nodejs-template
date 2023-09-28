const express = require('express');
const router = express.Router();
const multer = require("multer"); // for parsing multipart/form-data
const upload = multer();

// middleware
const APITokenMiddleware = require("../middlewares/APIToken.middleware");

// controller
const UploadController = require("../controllers/Upload.controller");

// routes
router.put("/", upload.single("file"), APITokenMiddleware, UploadController.upload);

module.exports = router;