const Service = require('../models/service');

// Controller for fetching all services
const getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch services.' });
  }
};

// Add other service-related controllers here...

module.exports = { getAllServices };
