const { verifyUserRegister, registerService } = require('../services/Register');
const { generateToken } = require('../middlewares/auth');

const verifyRegister = async (name, email) => {
  const verify = await verifyUserRegister(name, email);

  return verify;
};

const registerController = async (req, res) => {
  const { name, email, password } = req.body;
  const verifyNameEmail = verifyRegister(name, email);

  if (verifyNameEmail.name === name) {
    return res.status(409).json({ message: 'Name already registered' });
  };

  if (verifyNameEmail.email === email) {
    return res.status(409).json({ message: 'Email already registered' });
  };
  
  const newUser = await registerService({ name, email, password, role: 'customer' });
  const token = generateToken({ email, role: newUser.role });
  return res.status(201).json(token);
};

module.exports = registerController;
