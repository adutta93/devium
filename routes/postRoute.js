const router = require("express").Router();
const { protect, authorize } = require("../middleware/auth");
const {
  getAllPosts,
  getOneSinglePost,
  createPost,
  updatePost,
  deletePost,
} = require("../controller/postController");

router.get("/", protect, getAllPosts);
router.post("/create-post", protect, createPost);

router.get("/:id", protect, getOneSinglePost);
router.put("/update-post/:id", protect, updatePost);
router.delete("/delete-post/:id", deletePost);
module.exports = router;

// authorize('user')
