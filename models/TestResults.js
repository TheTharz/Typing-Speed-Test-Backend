const mongoose = require('mongoose');
const { Schema } = mongoose;
const TestResultsSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  duration: {
    type: Number,
  },
  speed: {
    type: Number,
  },
  accuracy: {
    type: Number,
  },
});
const TestResultsModel = mongoose.model('TestResults', TestResultsSchema);
module.exports = TestResultsSchema;
//checkout this user case
