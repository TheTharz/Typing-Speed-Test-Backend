const mongoose = require('mongoose');
const { Schema } = mongoose;
const TestResultsSchema = require('./TestResults');
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  test_results: [TestResultsSchema],
});

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;

//this is the user model
