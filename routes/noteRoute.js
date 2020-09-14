const router = require("express").Router();
const { protect, authorize } = require("../middleware/auth");
const { getAllNotes, createPost } = require("../controller/noteController");

router.route("/").get(protect, getAllNotes)
router.route('/create-post').post(protect, createPost);

router.route("/:id").get().put().delete();
module.exports = router;

// authorize('user')
