const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const { protect } = require("../middleware/auth");
const { verify } = require("../controller/authController");

//@route   GET  api/auth
//@desc    Get Verified user
//@access  Public
router.get("/", protect, verify);

module.exports = router;
