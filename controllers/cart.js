const Cart = require('../models/cart');
const Product = require('../models/product');
const Service = require('../models/service');
const { calculateProductTax, calculateServiceTax } = require('../utils/taxCalculator');

const addToCart = async (req, res) => {
  try {
    const { productId, serviceId, quantity } = req.body;

    if (productId) {
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      const tax = calculateProductTax(product.price);

      // Find the cart in the database or create a new one if it doesn't exist
      let cart = await Cart.findOne({});
      if (!cart) {
        cart = new Cart();
      }

      // Add product to the cart or update quantity if already exists
      const existingProductIndex = cart.products.findIndex((item) => item.productId === productId);
      if (existingProductIndex !== -1) {
        cart.products[existingProductIndex].quantity += quantity;
        cart.products[existingProductIndex].tax = tax;
      } else {
        cart.products.push({ productId, quantity, tax });
      }

      await cart.save();
    } else if (serviceId) {
      const service = await Service.findById(serviceId);
      if (!service) {
        return res.status(404).json({ message: 'Service not found' });
      }
      const tax = calculateServiceTax(service.price);

      // Find the cart in the database or create a new one if it doesn't exist
      let cart = await Cart.findOne({});
      if (!cart) {
        cart = new Cart();
      }

      // Add service to the cart or update quantity if already exists
      const existingServiceIndex = cart.services.findIndex((item) => item.serviceId === serviceId);
      if (existingServiceIndex !== -1) {
        cart.services[existingServiceIndex].quantity += quantity;
        cart.services[existingServiceIndex].tax = tax;
      } else {
        cart.services.push({ serviceId, quantity, tax });
      }

      await cart.save();
    } else {
      return res.status(400).json({ message: 'Invalid request' });
    }

    res.json({ message: 'Item added to cart successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const removeFromCart = async (req, res) => {
  try {
    const { productId, serviceId } = req.body;

    if (productId) {
      await Cart.updateOne({ 'products.productId': productId }, { $pull: { products: { productId } } });
    } else if (serviceId) {
      await Cart.updateOne({ 'services.serviceId': serviceId }, { $pull: { services: { serviceId } } });
    } else {
      return res.status(400).json({ message: 'Invalid request' });
    }

    res.json({ message: 'Item removed from cart successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const clearCart = async (req, res) => {
  try {
    await Cart.updateOne({}, { $set: { products: [], services: [] } });
    res.json({ message: 'Cart cleared successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getTotalBill = async (req, res) => {
  try {
    const cart = await Cart.findOne({});
    if (!cart) {
      return res.json({ totalBill: 0 });
    }

    let totalBill = 0;
    for (const product of cart.products) {
      totalBill += product.price * product.quantity + product.tax;
    }
    for (const service of cart.services) {
      totalBill += service.price * service.quantity + service.tax;
    }

    res.json({ totalBill });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const confirmOrder = async (req, res) => {
  try {
    const cart = await Cart.findOne({});
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    // Here, you can implement your custom order confirmation logic.
    // For example, you may want to do some additional checks before confirming the order.
    // Let's assume we simply mark the order as confirmed.

    cart.isConfirmed = true;
    await cart.save();

    res.json({ message: 'Order confirmed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  addToCart,
  removeFromCart,
  clearCart,
  getTotalBill,
  confirmOrder,
};
