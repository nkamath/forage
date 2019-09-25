const express = require("express");
const router = express.Router();
const staticController = require("../controllers/staticController.js");

router.get("/api/getUsername", staticController.getUsername);

module.exports = router;
