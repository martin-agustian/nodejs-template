const express = require('express');
const router = express.Router();

// controller
const EmailCtrl = require("../controllers/Email.ctrl");

// routes
router.post('/send', EmailCtrl.send);

module.exports = router;