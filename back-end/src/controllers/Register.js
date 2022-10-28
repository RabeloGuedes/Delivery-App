const registerService = require('../services/Register');

const registerController = async (req, res) => {
  const { name, email, password } = req.body;
  
  const createUser = await registerService(name, email, password);
  return res.status(201).json(createUser);
};

module.exports = registerController;
