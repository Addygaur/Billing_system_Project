// routes/admin.js
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');

// Get all orders
router.get('/orders', adminController.getAllOrders);

module.exports = router;
