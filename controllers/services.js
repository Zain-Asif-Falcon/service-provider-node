const Services = require("../models/Services");
const bcrypt = require("bcryptjs");

/**
 * Create service - Signup
 * @param {object} req
 * @param {object} res
 */
exports.create = async (req, res) => {
  try {
    const service = await Services.create(req.body); // Adding service in db
    // Done
    res.json({ success: true, service }); //Success
  } catch (err) {
    // Error handling
    console.log("Error ----> ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

/**
 * Get all Services
 * @param {object} req
 * @param {object} res
 */
exports.getAll = async (req, res) => {
  try {
    const services = await Services.find(); // Finding all the Services from db
    res.json({ success: true, services }); // Success
  } catch (err) {
    // Error handling
    console.log("Error ----> ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

/**
 * Get service by id
 * @param {object} req
 * @param {object} res
 */
exports.getById = async (req, res) => {
  try {
    const serviceId = req.params.serviceId; // Getting service id from URL parameter
    const service = await Services.findById(serviceId); // Finding service by id
    res.json({ success: true, service }); // Success
  } catch (err) {
    // Error handling
    console.log("Error ----> ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

/**
 * Update service
 * @param {object} req
 * @param {object} res
 */
exports.update = async (req, res) => {
  try {
    const serviceId = req.params.serviceId; // Getting service id from URL parameter

    const service = await Services.findByIdAndUpdate(serviceId, req.body, {
      new: true,
    }); // Updating the service
    res.json({ success: true, service }); // Success
  } catch (err) {
    // Error handling
    console.log("Error ----> ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

/**
 * Delete service
 * @param {object} req
 * @param {object} res
 */
exports.delete = async (req, res) => {
  try {
    const serviceId = req.params.serviceId; // Getting service id from URL parameter
    const service = await Services.findByIdAndDelete(serviceId); // Deleting the service
    res.json({ success: true, service }); // Success
  } catch (err) {
    // Error handling
    console.log("Error ----> ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
