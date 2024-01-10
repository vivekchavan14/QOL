const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const uri = process.env.ATLAS_URI;
const testRouter = require('./routes/test'); // Adding routing files
const usersRouter = require('./routes/users');

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => {
    console.log("MongoDB is Connected");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/result', testRouter);
app.use('/login', usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
