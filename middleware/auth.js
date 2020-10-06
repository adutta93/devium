const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
require("dotenv").config();

// Protect routes
// exports.protect = async (req, res, next) => {
//   const token = req.header("x-auth-token");
//   if (!token) {
//     return res
//       .status(401)
//       .json({ Err: "Not token given, unable to authorize" });
//   }
//   try {
//     jwt.verify(token, process.env.TOKEN_SECRET, (error, verified) => {
//       console.log("Verified ===>", verified);
//       if (error) {
//         return res.status(401).json({
//           err: "Token verification failed, access denied!",
//         });
//       } else {
//         req.user = verified.user;
//         console.log("Verified id ==> ", req.user);
//         next();
//       }
//     });
//   } catch (error) {
//     return res.status(500).json({ err: "Invalid Token" });
//   }
// };

exports.protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    // Set token from Bearer token in header
    token = req.headers.authorization.split(" ")[1];
    // Set token from cookie
  }
  // else if (req.cookies.token) {
  //   token = req.cookies.token;
  // }

  // Make sure token exists
  if (!token) {
    return res
      .status(401)
      .json({ Err: "Not token given, unable to authorize" });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

    req.user = await User.findById(decoded.id);

    next();
  } catch (err) {
    return res.status(401).json({ err: "Not authorize tomaccess" });
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
