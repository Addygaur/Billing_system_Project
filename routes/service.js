const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/service');

router.get('/', serviceController.getAllServices);

// Add other service-related routes here...

module.exports = router;
