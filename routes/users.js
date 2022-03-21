const router = require("express").Router();
const users = require("../controllers/users");

/**
 * ////////////////////////// Routes /////////////////////////
 * @method post user signup
 * @method get get all users
 * @method get get user by id
 * @method put update user
 * @method delete delete user
 */

// Create - User Signup
router.post("/", users.create);

// Read
router.get("/", users.getAll); // Get all users at once
router.get("/:userId", users.getById); // Get one user by it's id

// Update
router.put("/:userId", users.update); // Update a specific user by it's id

// Delete
router.delete("/:userId", users.delete); // delete a specific user by it's id

// Export
module.exports = router;
