const Notes = require("../models/noteModel");

exports.getAllNotes = async (req, res) => {
  try {
    // res.json({ user_id: req.user.id });
    const notes = await Notes.find({ user_id: req.user.id });
    res.status(200).json({
      notes,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.createPost = async (req, res) => {
  try {
    const { title, content, date, user_id, name } = req.body;

    const newNote = await Notes.create({
      title,
      content,
      date,
      user_id,
      name,
    });

    res.status(200).json({
      msg: "Note successfully created",
      newNote,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      err,
    });
  }
};
