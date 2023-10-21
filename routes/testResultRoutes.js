const express = require('express');
const router = express.Router();
const { updateTestResults } = require('../controllers/typingTestControllers');
router.put('/update', updateTestResults);
