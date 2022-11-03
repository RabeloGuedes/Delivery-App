const jwt = require('jsonwebtoken');

const jwtKey = require('fs')
  .readFileSync('jwt.evaluation.key', { encoding: 'utf-8' });

const JWT_SECRET = jwtKey;

const JWT_CONFIG = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const generateToken = (payload) => {
  const token = jwt.sign(
    { email: payload.email, role: payload.role, id: payload.id },
    JWT_SECRET,
    JWT_CONFIG,
  );

  return token;
};

module.exports = { generateToken };