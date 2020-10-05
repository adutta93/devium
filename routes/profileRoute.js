const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { protect } = require("../middleware/auth");
const {
  getCurrentUserProfile,
  manageUserProfile,
  getAllProfiles,
  getProfileById,
  addExperience,
  deleteExperience,
  addEducation,
  deleteEducation,
  deleteUser,
  getGitHubRepo,
} = require("../controller/profileController");

//@route   GET  api/profile/me
//@desc    Get current user pofile
//@access  Protect
router.get("/me", protect, getCurrentUserProfile);
// router.get("/me", getCurrentUserProfile);
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

//@route   PUT api/profile/user/experience
//@desc    Add experience to profile
//@access  Protect
router.put(
  "/user/experience",
  protect,
  [
    check("title", "Title is required!").not().isEmpty(),
    check("company", "Please enter your company name!").not().isEmpty(),
    check("from", "From date is required!").not().isEmpty(),
  ],
  addExperience
);

//@route   DELETE api/profile/user/experience/:exp_id
//@desc    Delete profile experience
//@access  Protect
router.delete("/user/experience/:exp_id", protect, deleteExperience);

//@route   PUT api/profile/user/education
//@desc    Add education to profile
//@access  Protect
router.put(
  "/user/education",
  protect,
  [
    check("school", "School is needed").not().isEmpty(),
    check("degree", "Degree is needed").not().isEmpty(),
    check("fieldofstudy", "Field of study is required!").not().isEmpty(),
    check("from", "From date is required!").not().isEmpty(),
  ],
  addEducation
);

//@route   DELETE api/profile/user/education/:edu_id
//@desc    Delete profile education
//@access  Protect
router.delete("/user/education/:edu_id", protect, deleteEducation);

//@route   DELETE api/profile/user/:user_id
//@desc    Delete profile
//@access  Protect
router.delete("/user/", protect, deleteUser);

//@route   GET api/profile/github/:githubusername
//@desc    Get github repo
//@access  Protect
// router.get("/github/:username", protect, getGitHubRepo);
module.exports = router;
