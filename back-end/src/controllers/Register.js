const registerService = require('../services/Register');
const { generateToken } = require('../middlewares/auth');

const registerController = async (req, res) => {
  const { name, email, password } = req.body;
  
  const newUser = await registerService({ name, email, password, role: 'customer' });
  const token = generateToken({ email, role: newUser.role });
  return res.status(201).json(token);
};

module.exports = registerController;
