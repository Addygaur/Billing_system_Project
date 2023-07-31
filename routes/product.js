const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');

router.get('/', productController.getAllProducts);

// Add other product-related routes here...

module.exports = router;
