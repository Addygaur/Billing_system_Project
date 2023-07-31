// models/cart.js
const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        default: 1,
      },
      tax: {
        type: Number,
        default: 0,
      },
    },
  ],
  services: [
    {
      serviceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        default: 1,
      },
      tax: {
        type: Number,
        default: 0,
      },
    },
  ],
  // Add other cart properties as needed
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
