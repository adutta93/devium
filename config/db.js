const mongoose = require("mongoose");
const config = require("config");
const db = config.get("DATABASE_URI");
// DB connection

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log("MongoDB Atlas connected.....!!!");
  } catch (error) {
    console.log("Error connecting MongoDB Atlas.....!!!");
    // exit process with fail
    process.exit(1);
  }
};

module.exports = connectDB;
