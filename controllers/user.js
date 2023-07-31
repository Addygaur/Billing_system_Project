const User = require('../models/user');

// Controller for creating a new user account
const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).json({ message: 'User account created successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the user account.' });
  }
};

// Add other user-related controllers here...

module.exports = { createUser };
