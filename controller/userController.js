const { check, validationResult } = require("express-validator");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const gravatar = require("gravatar");

exports.registration = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  const { firstName, lastName, email, password, passwordCheck } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      res.status(400).json({ errors: [{ msg: "User already exists" }] });
    }

    const avatar = gravatar.url(email, {
      s: "200",
      r: "pg",
      d: "mm",
    });

    const passwordHash = await bcrypt.hash(password, 12);
    const newUser = await new User({
      firstName,
      lastName,
      email,
      avatar,
      password: passwordHash,
    }).save();

    const payload = {
      user: {
        id: newUser.id,
      },
    };

    jwt.sign(
      payload,
      process.env.TOKEN_SECRET,
      { expiresIn: 18000 },
      (err, token) => {
        if (err) {
          throw err;
        }
        res.status(200).json({ token });
      }
    );
    // res.status(200).json({ newUser });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation email and password
    if (!email || !password) {
      return res.status(400).json({
        Err: "Please enter mail id or password",
      });
    }

    //check for user
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(401).json({
        err: "User dose not exists",
      });
    }

    //check for password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        err: "Invalid Password",
      });
    }

    //if everything matches
    const payload = { id: user._id, email: user.email };
    const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
      expiresIn: "5h",
    });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({
      Error: "Unable to log in!",
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ msg: "User deleted" });
  } catch (error) {
    return res.status(500).json({ err: err.message });
  }
};

// exports.verifiedToken = (req, res) => {
//   try {
//     // Verify token
//     const token = req.header("Authorization");
//     if (!token) {
//       return res.send("Token not found");
//     }
//     jwt.verify(token, process.env.TOKEN_SECRET, async (err, verified) => {
//       if (err) {
//         return res.send("Invalid Token");
//       }
//       const user = await User.findById(verified.id);
//       console.log(user);
//       if (!user) {
//         return res.send("User not found");
//       }
//       return res.send("Verified");
//     });
//   } catch (err) {
//     return res.status(500).json({ err: err.message });
//   }
// };
