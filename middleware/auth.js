const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// Protect routes
exports.protect = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) {
      return res
        .status(401)
        .json({ Err: "Not token given, unable to authorize" });
    }
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    if (!verified) {
      return res.status(401).json({
        err: "Token verification failed, access denied!",
      });
    }
    req.user = verified.id;
    console.log(verified);
    next();
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
