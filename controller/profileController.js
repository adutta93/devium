const Profile = require("../models/profileModel");

exports.getCurrentUserProfile = async (req, res) => {
  try {
    const userProfile = await Profile.findOne({
      user: req.user.id,
    }).populate("User", ["firstName", "lastName", "avatar"]);

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
