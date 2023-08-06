const express = require('express');
const { mongoose } = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');
const app = express();

//database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB', err);
  });

app.use(express.urlencoded({ extended: false }));

const authRoute = require('./routes/authRouts');
app.use(express.json());
app.use('/', authRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}!`));