const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { protect } = require("../middleware/auth");
const {
  getCurrentUserProfile,
  manageUserProfile,
  getAllProfiles,
  getProfileById,
} = require("../controller/profileController");

//@route   GET  api/profile/me
//@desc    Get current user pofile
//@access  Protect
router.get("/me", protect, getCurrentUserProfile);

//@route   POST api/profile/manage-profile
//@desc    Creating and updating user profile
//@access  Protect

router.post(
  "/manage-profile",
  protect,
  [
    check("status", "Status is required!").not().isEmpty(),
    check("skills", "Please enter your skills!").not().isEmpty(),
  ],
  manageUserProfile
);

//@route   GET api/profile/
//@desc    Get all profile
//@access  Protect

router.get("/", protect, getAllProfiles);

//@route   GET api/profile/user/:user_id
//@desc    Get profile by id
//@access  Protect

router.get("/user/:user_id", protect, getProfileById);

module.exports = router;
