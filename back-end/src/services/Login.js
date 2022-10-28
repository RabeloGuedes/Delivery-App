const { User } = require('../database/models');

const loginService = async (email, password) => {
  const getUserById = await User.findOne({ where: { email, password } });

  return getUserById;
};

module.exports = loginService;
