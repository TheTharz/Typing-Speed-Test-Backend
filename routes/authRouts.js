const express = require('express');
const router = express.Router();
const { test, register, login } = require('../controllers/authControllers');

router.get('/', test);
router.post('/register', register);
router.post('/login', login);
//write the functions for typing test parts
module.exports = router;
