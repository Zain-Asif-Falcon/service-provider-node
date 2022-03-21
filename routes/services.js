const router = require("express").Router();
const services = require("../controllers/services");

/**
 * ////////////////////////// Routes /////////////////////////
 * @method post service signup
 * @method get get all services
 * @method get get service by id
 * @method put update service
 * @method delete delete service
 */

// Create - service Signup
router.post("/", services.create);

// Read
router.get("/", services.getAll); // Get all services at once
router.get("/:serviceId", services.getById); // Get one service by it's id

// Update
router.put("/:serviceId", services.update); // Update a specific service by it's id

// Delete
router.delete("/:serviceId", services.delete); // delete a specific service by it's id

// Export
module.exports = router;
