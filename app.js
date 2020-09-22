const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
// dotenv.config({ path: "./.env" });
require("dotenv").config();

const app = express();

//middleware
app.use(express.json({ extended: false }));

// conncet database
connectDB();

//All routers

app.use("/api/users", require("./routes/userRoute"));
app.use("/api/auth", require("./routes/authRoute"));
app.use("/api/posts", require("./routes/postRoute"));
app.use("/api/profile", require("./routes/profileRoute"));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App is running at port ${port}`);
});
