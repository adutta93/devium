const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// Protect routes
exports.protect = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) {
      return res.status(400).json({ Err: "Not authorize to access" });
    }
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.status(400).json("Authentication no valid");
      }
      req.user = user;
      next();
    });
  } catch (error) {
    return res.status(500).json({ err: err.message });
  }
};

// exports.authorize = (...roles) => {
//   return (req, res, next) => {
//     if (!roles.includes(req.user.role)) {
//       return next(
//         `User role ${req.user.role} is not authorized to access this route`,
//         403
//       );
//     }
//     next();
//   };
// };