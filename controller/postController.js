const Posts = require("../models/postModel");
const Profile = require("../models/profileModel");
const User = require("../models/userModel");

const { validationResult } = require("express-validator");

//GET ALL POST
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Posts.find().sort({ date: -1 });
    // console.log(posts);
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

//GET A SINGLE POST
exports.getOneSinglePost = async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id);

    if (!post) return res.status(404).json({ msg: "Post Not Found" });
    // console.log(post);
    res.status(200).json({
      post,
    });
  } catch (error) {
    console.error(error);
    if (error.kind === "ObjectId")
      return res.status(404).json({ msg: "Post Not Found" });
    return res.status(500).json({
      error: "Server error",
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

//UPDATE POST
exports.updatePost = async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id);

    if (!post) return res.status(404).json({ msg: "Post Not Found" });
    //check user authorization to delete post
    if (post.user.toString() !== req.user.id) {
      return res
        .status(401)
        .json({ msg: "User not authorized to edit this post" });
    }
    await post.update(req.body, {
      new: true,
    });
    res.json({
      msg: "Post successfully updated",
    });
  } catch (error) {
    console.error(error);
    if (error.kind === "ObjectId")
      return res.status(404).json({ msg: "Post Not Found" });
    res.status(500).json({
      status: "Error",
      error: error.message,
    });
  }
};

//DELETE POST
exports.deletePost = async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id);

    if (!post) return res.status(404).json({ msg: "Post Not Found" });
    //check user authorization to delete post
    if (post.user.toString() !== req.user.id) {
      return res
        .status(401)
        .json({ msg: "User not authorized to delete this post" });
    }
    await post.remove();
    res.json({
      msg: "Post successfully deleted ",
    });
  } catch (err) {
    console.error(error);
    if (error.kind === "ObjectId")
      return res.status(404).json({ msg: "Post Not Found" });
    res.status(500).json({
      status: "Error",
      error: error.message,
    });
  }
};

//LIKE POST
exports.likePost = async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id);
    if (
      post.likes.filter((like) => like.user.toString() === req.user.id).length >
      0
    ) {
      return res.status(400).json({ msg: "Post already liked" });
    }
    post.likes.unshift({ user: req.user.id });
    await post.save();
    res.json(post.likes);
  } catch (error) {
    console.error(error.message);
    res.ststus(500).json({ msg: "Server error" });
  }
};
