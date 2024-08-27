const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/adminController');
const auth = require('../Middleware/auth');

router.post('/user', auth, createUser);

module.exports = router;
