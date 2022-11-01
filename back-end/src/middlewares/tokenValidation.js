const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET || 'suaSenhaSecreta';

const verifyToken = async (req, res, next) => {
const token = req.headers.authorization;

if (!token) {
  return res.status(401).json({ message: 'Token not found' });
}

try {
  const { email } = jwt.verify(token, SECRET);
  req.user = email;

  next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = verifyToken;