const express = require('express');
const router = express.Router();
const { createGroup } = require('../controllers/groupController');
const auth = require('../Middleware/auth');

router.post('/group', auth, createGroup);

module.exports = router;
