const { registerService } = require('../services/Register');
const { generateToken } = require('../middlewares/auth');

const registerController = async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = await registerService({ name, email, password, role: 'customer' });
  const { status, message } = newUser;

  if (status && message) {
    return res.status(status).json({ message });
  }

  const token = generateToken({ email, role: newUser.role, id: newUser.id });
  return res.status(201).json(token);
};

const adminRegisterController = async (req, res) => {
  const { name, email, password, role } = req.body;
  const { role: userRole } = req.user;
  if (userRole !== 'administrator') {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
  const newUser = await registerService({ name, email, password, role });
  const { status, message } = newUser;

  if (status && message) {
    return res.status(status).json({ message });
  }
  return res.status(201).json({ message: 'User created successfully' });
};

module.exports = { registerController, adminRegisterController };