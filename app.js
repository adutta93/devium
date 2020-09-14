const express = require('express'); 
const morgan = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
dotenv.config({ path: './.env' });
// require('dotenv').config()

const app = express();

//importing routes
const userRoute = require('./routes/userRoute')
const noteRoute = require('./routes/noteRoute')

// middlewares
app.use(morgan('dev'))
app.use(cors());
app.use(express.json())
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

//assigning routers

app.use('/api/users', userRoute)
app.use('/api/notes', noteRoute)



// DB connection

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('DB CONNECTED SUCCESSFULLY');
  })
  .catch(() => {
    console.log('PROBLEM CONNECTING DB');
  });

//Server  
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`App is running at port ${port}`)
})