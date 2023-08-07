const express = require('express');
const router = express.Router();
const { test, register, login } = require('../controllers/authControllers');
const cors = require('cors');
router.use(
  cors({
    credentials: true,
    origin: 'http://localhost:5173',
  })
);

router.get('/', test);
router.post('/register', register);
router.post('/login', login);
module.exports = router;
