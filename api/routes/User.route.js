const express = require('express');
const router = express.Router();

// controller
const UserController = require("../controllers/User.controller");

// routes
router.get('/list', UserController.list);
router.delete('/delete', UserController.delete);

module.exports = router;