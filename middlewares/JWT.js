const { sign, verify } = require('jsonwebtoken');
const createToken = (user) => {
  const accessToken = sign(
    {
      username: user.username,
      id: user._id,
    },
    process.env.JWT_SECRET
  );
  return accessToken;
};
module.exports = { createToken };
