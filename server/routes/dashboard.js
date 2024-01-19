//importing modules
const express = require("express");
const router = express.Router();
const {isLoggedIn} = require("../middleware/checkAuth");
const dashboardController = require("../controller/dashboardController");

/**
 * Dashboard Modules
 */
//needs to be logged in to access dashboard
router.get("/dashboard",isLoggedIn, dashboardController.dashboard);

module.exports = router;
