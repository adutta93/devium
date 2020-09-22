const Profile = require("../models/profileModel");
const User = require("../models/userModel");
const { validationResult } = require("express-validator");

//GET CURRENT USER PROFILE
exports.getCurrentUserProfile = async (req, res) => {
  try {
    const userProfile = await Profile.findOne({
      user: req.user.id,
    }).populate("User", ["name", "avatar"]);

    if (!userProfile) {
      return res.status(400).json({ msg: "No profile found for this user" });
    }
    res.status(200).json({ userProfile });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      msg: "Server error",
    });
  }
};

//MANAGE USER PROFILE
exports.manageUserProfile = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  //Build profile object
  const profileFields = {};
  profileFields.user = req.user.id;
  if (req.body.handle) profileFields.handle = req.body.handle;
  if (req.body.company) profileFields.company = req.body.company;
  if (req.body.website) profileFields.website = req.body.website;
  if (req.body.location) profileFields.location = req.body.location;
  if (req.body.bio) profileFields.bio = req.body.bio;
  if (req.body.status) profileFields.status = req.body.status;
  if (req.body.githubusername)
    profileFields.githubusername = req.body.githubusername;
  // Skills - Spilt into array
  if (typeof req.body.skills !== "undefined") {
    profileFields.skills = req.body.skills
      .split(",")
      .map((skill) => skill.trim());
  }
  console.log(profileFields.status);
  console.log(profileFields.skills);

  // Social
  profileFields.social = {};
  if (req.body.youtube) profileFields.social.youtube = req.body.youtube;
  if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
  if (req.body.facebook) profileFields.social.facebook = req.body.facebook;
  if (req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;
  if (req.body.instagram) profileFields.social.instagram = req.body.instagram;
  if (req.body.stackOverflow)
    profileFields.social.stackOverflow = req.body.stackOverflow;

  try {
    let profile = await Profile.findOne({ user: req.user.id });

    if (profile) {
      //update
      profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true }
      );
      return res.json(profile);
    }

    //create
    profile = await new Profile(profileFields).save();

    res.json(profile);
  } catch (error) {
    console.error(error.message);
    res.json({ msg: "Server error" });
  }
};

exports.getAllProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", ["name", "avatar"]);
    res.json({
      length: profiles.length,
      profiles,
    });
  } catch (error) {
    console.error(error.message);
    res.json({ msg: "Server error" });
  }
};

exports.getProfileById = async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id,
    }).populate("user", ["name", "avatar"]);

    if (!profile) {
      return res.json({ msg: "Profile not found" });
    }
    res.json({
      profile,
    });
  } catch (error) {
    console.error(error.message);
    if (error.kind == "ObjectId") return res.json({ msg: "Profile not found" });
    res.json({ msg: "Server error" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    //remove profile
    await Profile.findOneAndRemove({ user: req.user.id });
    //remove user
    await User.findOneAndRemove({ _id: req.user.id });
    res.json({ msg: "User deleted" });
  } catch (error) {
    return res.status(500).json({ err: err.message });
  }
};
