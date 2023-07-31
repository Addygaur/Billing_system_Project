const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.post('/', userController.createUser);

// Add other user-related routes here...

module.exports = router;
