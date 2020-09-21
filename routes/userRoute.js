const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const { check, validationResult } = require("express-validator");
require("dotenv").config();

const { registration } = require("../controller/userController");
//@route   POST  api/users/signup
//@desc    Sign Up user
//@access  Public
router.post(
  "/signup",
  [
    check("firstName")
      .isLength({ min: 3 })
      .withMessage("Firstname must be at least 3 chars long"),

    check("lastName")
      .isLength({ min: 2 })
      .withMessage("Lasttname must be at least 2 chars long"),

    check("email").isEmail().withMessage("Must be a valid email id"),

    check("password")
      .isLength({ min: 8 })
      .withMessage("Must be a atleast 8 character long")
      .matches(/\d/)
      .withMessage("must contain a number"),
  ],
  registration
);

module.exports = router;
