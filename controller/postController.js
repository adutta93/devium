const Posts = require("../models/postModel");
const Profile = require("../models/profileModel");
const User = require("../models/userModel");

const { validationResult } = require("express-validator");

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Posts.find().sort({ date: -1 });
    console.log(posts);
    res.status(200).json({
      results: posts.length,
      posts,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Server error",
    });
  }
};

exports.getOneSinglePost = async (req, res) => {
  try {
    const notes = await Notes.findById(req.params.id);
    console.log(notes);
    res.status(200).json({
      results: notes.length,
      notes,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

//CREATE POST
exports.createPost = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  try {
    const user = await User.findById(req.user.id).select("-password");
    const newPost = new Posts({
      text: req.body.text,
      name: user.name,
      avatar: user.avatar,
      user: req.user.id,
    });
    const post = await newPost.save();
    res.status(200).json({
      msg: "Post successfully created",
      post,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Server error",
    });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const note = await Notes.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        note,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "Error",
      error: error.message,
    });
  }
};

exports.deletePost = async (req, res) => {
  try {
    await Notes.findByIdAndDelete(req.params.id);
    res.json({
      msg: "Successfully deleted Note",
      // data: null,
    });
  } catch (err) {
    res.status(500).json({
      status: "Error",
      error: error.message,
    });
  }
};
