const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
require("dotenv").config();

// Protect routes
exports.protect = async (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) {
    return res
      .status(401)
      .json({ Err: "Not token given, unable to authorize" });
  }
  try {
    jwt.verify(token, process.env.TOKEN_SECRET, (error, verified) => {
      console.log("Verified ===>", verified);
      if (error) {
        return res.status(401).json({
          err: "Token verification failed, access denied!",
        });
      } else {
        req.user = verified.user;
        console.log("Verified id ==> ", req.user);
        next();
      }
    });
  } catch (error) {
    return res.status(500).json({ err: "Invalid Token" });
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
