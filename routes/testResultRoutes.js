const express = require('express');
const router = express.Router();
const {
  updateTestResults,
  getTestResults,
} = require('../controllers/typingTestControllers');
router.put('/update', updateTestResults);
router.get('/get', getTestResults);
