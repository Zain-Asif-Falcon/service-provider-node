const router = require("express").Router();

// Parent Routes
router.use("/users", require("./users")); // All the user routes
router.use("/services", require("./services")); // All the auth routes
router.use("/tiers", require("./tiers")); // All the auth routes

// Export
module.exports = router;
