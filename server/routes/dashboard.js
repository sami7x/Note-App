//importing modules
const express = require("express");
const router = express.Router();
const dashboardController = require("../controller/dashboardController");

/**
 * Dashboard Modules
 */
router.get("/dashboard", dashboardController.dashboard);

module.exports = router;
