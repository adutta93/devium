const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connectDB = require("./config/db");
dotenv.config({ path: "./.env" });
// require('dotenv').config()

const app = express();

// conncet database

connectDB();
//importing routes
const userRoute = require("./routes/userRoute");
const postRoute = require("./routes/postRoute");

// middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//assigning routers

app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

//Server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App is running at port ${port}`);
});
