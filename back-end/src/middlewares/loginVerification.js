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

const verifyName = async (req, res, next) => {
  const { name } = req.body;

  if (name.length < 12) {
    return res.status(400).json({ message: '"name" length must be at least 12 characters long' });
  }
  next();
};

module.exports = { verifyPassword, verifyEmail, verifyName };
