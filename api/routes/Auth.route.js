const express = require('express');
const router = express.Router();

// controller
const AuthController = require("../controllers/Auth.controller");

// routes
router.post('/login', AuthController.login);
router.post('/register', AuthController.register);
router.post('/forgot-password', AuthController.forgotPassword);

module.exports = router;