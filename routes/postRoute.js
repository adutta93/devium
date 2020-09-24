const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const {
  createPost,
  getAllPosts,
  getOneSinglePost,
  deletePost,
  updatePost,
  likePost,
  unlikePost,
  postComment,
  deleteComment,
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

//@route   UPDATE api/post/:id
//@desc    update a post
//@access  Protect
router.put("/:id", protect, updatePost);

//@route   DELETE api/post/:id
//@desc    Delete a post
//@access  Protect
router.delete("/:id", protect, deletePost);

//@route   PUT api/post/likes/:id
//@desc    Like a post
//@access  Protect
router.put("/likes/:id", protect, likePost);

//@route   PUT api/post/unlikes/:id
//@desc    UnLike a post
//@access  Protect
router.put("/unlikes/:id", protect, unlikePost);

//@route   POST api/post/comments/:id
//@desc    Add comment
//@access  Protect
router.post(
  "/comments/:id",
  protect,
  [check("text", "Text is required").not().isEmpty()],
  postComment
);

//@route   DELETE api/post/comments/:id/:comment_id
//@desc    Delete comment
//@access  Protect
router.delete("/comments/:id/:comment_id", protect, deleteComment);
module.exports = router;
