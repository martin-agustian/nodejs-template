const express = require('express');
const router = express.Router();

// controller
const AuthCtrl = require("../controllers/Auth.ctrl");

// routes
router.post('/login', AuthCtrl.login);
router.post('/register', AuthCtrl.register);
router.post('/forgot-password', AuthCtrl.forgotPassword);

module.exports = router;