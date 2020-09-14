const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 32,
    },

    lastName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 32,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      loadClass: true,
      // // validate: [validator.isEmail, 'Please provode a valid email'],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please add a valid email",
      ],
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
      minlength: 8,
      // select: false,
    },
    role: {
      type: String,
      default: 'user',
      enum: ['user', 'admin', 'accounts'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);