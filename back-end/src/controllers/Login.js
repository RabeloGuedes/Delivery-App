const loginService = require('../services/Login');

const loginController = async (req, res) => {
  const { email, password } = req.body;
  
  const getUser = await loginService(email, password);
  
  if (getUser === null) {
    return res.status(404).json({ message: 'Invalid email or password' });
  } 

  return res.status(200).json(getUser);
};

module.exports = loginController;
