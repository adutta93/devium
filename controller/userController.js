// const express = require("express");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.registration = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (user) {
      return res.status(400).json({
        msg: "User already exists",
      });
    }
    const passwordHash = await bcrypt.hash(password, 12);
    const newUser = await new User({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: passwordHash,
    }).save();

    res.status(200).json({
      newUser,
    });
  } catch (error) {
    res.status(500).json({
      Error: "Not being able to register user!",
    });
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
    const token = jwt.sign(payload, process.env.TOkEN_SECRET, {
      expiresIn: "5h",
    });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({
      Error: "Unable to log in!",
    });
  }
};

exports.verifiedToken = (req, res) => {
  try {
    // Verify token
    const token = req.header("Authorization");
    if (!token) {
      return res.send('Token not found');
    }
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, verified) => {
      if (err) {
        return res.send('Invalid Token');
      }
      const user = await User.findById(verified.id);
      console.log(user);
      if (!user) {
        return res.send('User not found');
      }
      return res.send('Verified');
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
