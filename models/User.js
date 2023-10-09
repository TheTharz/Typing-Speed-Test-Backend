const mongoose = require('mongoose');
const { Schema } = mongoose;
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
  test_results: {
    type: Array,
    default: [],
  },
});

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;

//this is the user model
