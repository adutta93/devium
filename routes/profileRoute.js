const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");
const { getCurrentUserProfile } = require("../controller/profileController");

//@route   GET  api/profile/me
//@desc    Get current user pofile
//@access  Protect
router.get("/me", protect, getCurrentUserProfile);

module.exports = router;
