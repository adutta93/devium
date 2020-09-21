const User = require("../models/userModel");

exports.verify = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      err: "Server error",
    });
  }
};
