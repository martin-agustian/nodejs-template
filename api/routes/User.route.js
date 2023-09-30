const express = require('express');
const router = express.Router();

// controller
const UserCtrl = require("../controllers/User.ctrl");

// routes
router.get('/list', UserCtrl.list);
router.delete('/delete', UserCtrl.delete);

module.exports = router;