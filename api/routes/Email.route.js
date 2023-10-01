const express = require('express');
const router = express.Router();

// controller
const EmailCtrl = require("../controllers/Email.ctrl");

// routes
router.post('/forgot-password', EmailCtrl.forgotPassword);

module.exports = router;