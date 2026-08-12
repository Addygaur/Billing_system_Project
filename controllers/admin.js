// controllers/admin.js
const Order = require('../models/order');

// Get all orders
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('user', 'name email'); // Assuming 'user' is a reference to the User model in the Order schema
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getAllOrders,
};
