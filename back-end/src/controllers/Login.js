const loginService = require('../services/Login');

const loginController = async (req, res) => {
  const { email, password } = req.body;
  
  const getUser = await loginService(email, password);
  return res.status(200).json(getUser);
};

module.exports = loginController;
