const { response } = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const { createToken } = require('../middlewares/JWT');
const test = (req, res) => {
  res.json('test');
  console.log('test');
};

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    //checking username
    if (!username) {
      return res.json({ error: 'Username is required' });
    }

    //checking email
    if (!email) {
      return res.json({ error: 'Email is required' });
    }

    const exist = await User.findOne({ email: email });

    if (exist) {
      return res.json({ error: 'Email already taken' });
    }

    //checking password
    if (!password || password.length < 8) {
      return res.json({
        error: 'Password is required and should be 8 characters long',
      });
    }

    //hashing password
    bcrypt.hash(password, 10).then((hash) => {
      User.create({
        username,
        email,
        password: hash,
      }).then((user) => {
        console.log('user created successfully');
        res.json(user);
      });
    });
  } catch (err) {
    console.log(err);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  //checking email
  const user = await User.findOne({ email: email });

  if (!user) {
    return res.json({ error: 'User not found' });
  }

  //checking password
  bcrypt.compare(password, user.password).then((match) => {
    if (!match) {
      return res.json({ error: 'Invalid password or email' });
    }
    const acessToken = createToken(user);
    res.cookie('acessToken', acessToken, { maxAge: 1000 * 60 * 60 * 24 * 30 });
    res.json('Logged in successfully');
  });
};

module.exports = { test, register, login };
