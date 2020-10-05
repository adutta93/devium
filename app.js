const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path");
// dotenv.config({ path: "./.env" });

const app = express();

//middleware
app.use(express.json({ extended: false }));
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// conncet database
connectDB();

//All routers

app.use("/api/users", require("./routes/userRoute"));
app.use("/api/auth", require("./routes/authRoute"));
app.use("/api/posts", require("./routes/postRoute"));
app.use("/api/profile", require("./routes/profileRoute"));
// app.use("/api", require("./routes/paymentRoute"));

//production build
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;
const server_host = "0.0.0.0";
app.listen(port, server_host, () => {
  console.log(`App is running at port ${port}`);
});
