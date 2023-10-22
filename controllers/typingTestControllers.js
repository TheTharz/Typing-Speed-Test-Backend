const { response } = require('response');
const User = require('../models/User');
const testResult = require('../models/testResult');

const updateTestResults = async (req, res) => {
  const id = req.params.id;
  const { testResults } = req.body;
  /*test result will be a object with
  {
    wpm,accuracy
  }
  */
  try {
    const user = await User.findById(id);
    const newTestResult = new testResult(testResults);
    user.test_results.push(newTestResult);
    await user.save();
    res.status(200).json({ message: 'Test results saved', user });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error', err });
  }
};

module.exports = { updateTestResults };
