// routes/cart.js
const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart');

// Add product or service to the cart
router.post('/add', cartController.addToCart);

// Remove product or service from the cart
router.post('/remove', cartController.removeFromCart);

// Clear the cart
router.post('/clear', cartController.clearCart);

// View total bill
router.get('/total', cartController.getTotalBill);

// Confirm the order
router.post('/confirm', cartController.confirmOrder);

module.exports = router;
