const express = require('express');
const router = express.Router();
const { test, register, login } = require('../controllers/authControllers');
router.get('/', test);
router.post('/register', register);
router.get('/login', login);
module.exports = router;
