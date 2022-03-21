const Tiers = require("../models/Tiers");

/**
 * Create tier - Signup
 * @param {object} req
 * @param {object} res
 */
exports.create = async (req, res) => {
  try {
    const tier = await Tiers.create(req.body); // Adding tier in db
    // Done
    res.json({ success: true, tier }); //Success
  } catch (err) {
    // Error handling
    console.log("Error ----> ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

/**
 * Get all Tiers
 * @param {object} req
 * @param {object} res
 */
exports.getAll = async (req, res) => {
  try {
    const tiers = await Tiers.find(); // Finding all the Tiers from db
    res.json({ success: true, tiers }); // Success
  } catch (err) {
    // Error handling
    console.log("Error ----> ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

/**
 * Get tier by id
 * @param {object} req
 * @param {object} res
 */
exports.getById = async (req, res) => {
  try {
    const tierId = req.params.tierId; // Getting tier id from URL parameter
    const tier = await Tiers.findById(tierId).populate("service"); // Finding tier by id
    res.json({ success: true, tier }); // Success
  } catch (err) {
    // Error handling
    console.log("Error ----> ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

/**
 * Get tier by service id
 * @param {object} req
 * @param {object} res
 */
exports.getByServoceId = async (req, res) => {
  try {
    const serviceId = req.params.serviceId; // Getting service id from URL parameter
    const tiers = await Tiers.find({ service: serviceId }).populate("service"); // Finding tier by service id
    res.json({ success: true, tiers }); // Success
  } catch (err) {
    // Error handling
    console.log("Error ----> ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

/**
 * Update tier
 * @param {object} req
 * @param {object} res
 */
exports.update = async (req, res) => {
  try {
    const tierId = req.params.tierId; // Getting tier id from URL parameter

    const tier = await Tiers.findByIdAndUpdate(tierId, req.body, {
      new: true,
    }); // Updating the tier
    res.json({ success: true, tier }); // Success
  } catch (err) {
    // Error handling
    console.log("Error ----> ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

/**
 * Delete tier
 * @param {object} req
 * @param {object} res
 */
exports.delete = async (req, res) => {
  try {
    const tierId = req.params.tierId; // Getting tier id from URL parameter
    const tier = await Tiers.findByIdAndDelete(tierId); // Deleting the tier
    res.json({ success: true, tier }); // Success
  } catch (err) {
    // Error handling
    console.log("Error ----> ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
