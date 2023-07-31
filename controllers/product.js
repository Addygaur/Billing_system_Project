const Product = require('../models/product');

// Controller for fetching all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products.' });
  }
};

// Add other product-related controllers here...

module.exports = { getAllProducts };
