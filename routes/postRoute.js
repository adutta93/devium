const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { createPost } = require("../controller/postController");
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

module.exports = router;
