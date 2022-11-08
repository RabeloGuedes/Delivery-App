const jwt = require('jsonwebtoken');

const jwtKey = require('fs')
  .readFileSync('jwt.evaluation.key', { encoding: 'utf-8' });

const SECRET = jwtKey;

const verifyToken = async (req, res, next) => {
const token = req.headers.authorization;

if (!token) {
  return res.status(401).json({ message: 'Token not found' });
}

try {
  const { id, role } = jwt.verify(token, SECRET);
  req.user = {
    id,
    role,
  };

  next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = verifyToken;