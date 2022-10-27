const loginService = require('../services/Login');

const verifyPassword = async (req, res, next) => {
  const { password } = req.body;

  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: '"password" length must be at least 6 characters long' });
  }

  next();
};

const verifyEmail = async (req, res, next) => {
  const { email } = req.body;

  const validEmail = /^\w+(\[\+\.-\]?\w)*@\w+(\[\.-\]?\w+)*\.[a-z]+$/i;

  if (!validEmail.test(email)) {
    return res
      .status(400)
      .json({ message: '"email" must be a valid email' });
  }

  next();
};

module.exports = { verifyPassword, verifyEmail };
