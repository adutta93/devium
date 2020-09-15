const router = require("express").Router();
const { protect, authorize } = require("../middleware/auth");
const {
  getAllNotes,
  getOneSingleNote,
  createNote,
  updateNote,
  deleteNote
} = require("../controller/noteController");

router.get("/", protect, getAllNotes);
router.post("/create-note", protect, createNote);

router.get('/:id', protect, getOneSingleNote)
router.put("/update-note/:id", protect, updateNote)
router.delete('/delete-note/:id', deleteNote);
module.exports = router;

// authorize('user')
