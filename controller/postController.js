const Notes = require("../models/noteModel");

exports.getAllPosts = async (req, res) => {
  try {
    // res.json({ user_id: req.user.id });
    const notes = await Notes.find();
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
      error: error.message,
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
