const express = require('express');
const router = express.Router();

// controller
const UserCtrl = require("../controllers/User.ctrl");

// routes
router.get('/', UserCtrl.list);
router.post('/', UserCtrl.store);

module.exports = router;