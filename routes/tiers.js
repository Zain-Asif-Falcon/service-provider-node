const router = require("express").Router();
const tiers = require("../controllers/tiers");

/**
 * ////////////////////////// Routes /////////////////////////
 * @method post tier signup
 * @method get get all tiers
 * @method get get tier by id
 * @method put update tier
 * @method delete delete tier
 */

// Create - tier Signup
router.post("/", tiers.create);

// Read
router.get("/", tiers.getAll); // Get all tiers at once
router.get("/:tierId", tiers.getById); // Get one tier by it's id
router.get("/getByService/:serviceId", tiers.getByServoceId); // Get one tier by serviceId

// Update
router.put("/:tierId", tiers.update); // Update a specific tier by it's id

// Delete
router.delete("/:tierId", tiers.delete); // delete a specific tier by it's id

// Export
module.exports = router;
