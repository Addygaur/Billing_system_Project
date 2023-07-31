const mongoose = require('mongoose');

// Replace 'billing_system' with the name of your database
const dbURI = 'mongodb://127.0.0.1:27017/billing_system';

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Failed to connect to MongoDB', err));
//localhost is ipv6 and 127.0.0.1 is ipv4