const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'qualquercoisa';

const JWT_CONFIG = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const generateToken = (payload) => {
  const token = jwt.sign(
    { email: payload.email, role: payload.role },
    JWT_SECRET,
    JWT_CONFIG,
  );

  return token;
};

module.exports = { generateToken };