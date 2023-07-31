const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Database connection
mongoose.connect('mongodb://127.0.0.1:27017/billing_system', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');
const serviceRoutes = require('./routes/service');
const cartRoutes = require('./routes/cart');
const adminRoutes = require('./routes/admin');

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/carts', cartRoutes);
app.use('/api/admin', adminRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});