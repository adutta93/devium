const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const postSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    text: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
    likes: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      },
    ],
    comments: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        text: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          // required: true,
        },
        avatar: {
          type: String,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Posts", postSchema);
