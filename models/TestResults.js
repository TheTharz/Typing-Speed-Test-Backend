const mongoose = require('mongoose');
const { Schema } = mongoose;
const TestResultsSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  wordsPerMinute: {
    type: Number,
  },
  testDate: {
    type: Date,
  },
  testNumber: {
    type: Number,
  },
});
const TestResultsModel = mongoose.model('TestResults', TestResultsSchema);
module.exports = TestResultsModel;
