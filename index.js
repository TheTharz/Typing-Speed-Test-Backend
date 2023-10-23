const express = require('express');
const { mongoose } = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');
const app = express();
const authRoute = require('./routes/authRouts');
const testResultRoute = require('./routes/testResultRoutes');

//database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB', err);
  });

app.use(
  cors({
    //this is used to connect client and server without errors
    credentials: true,
    origin: 'http://localhost:5173',
  })
);
app.use(express.urlencoded({ extended: false }));

app.use(express.json());
app.use('/', authRoute);
app.use('/testResult', testResultRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}!`));
