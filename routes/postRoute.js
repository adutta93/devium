const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const {
  createPost,
  getAllPosts,
  getOneSinglePost,
  deletePost,
} = require("../controller/postController");
const { protect } = require("../middleware/auth");

//@route   POST api/post/create-post
//@desc    Add post
//@access  Protect
router.post(
  "/create-post",
  protect,
  [check("text", "Text is required").not().isEmpty()],
  createPost
);

//@route   GET api/post/
//@desc    Get all post
//@access  Protect
router.get("/", protect, getAllPosts);

//@route   GET api/post/:id
//@desc    Get all post
//@access  Protect
router.get("/:id", protect, getOneSinglePost);

//@route   DELETE api/post/:id
//@desc    Delete a post
//@access  Protect
router.delete("/:id", protect, deletePost);
module.exports = router;
