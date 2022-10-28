const { User } = require('../database/models');

const registerService = async (name, email, password) => {
  const createUser = await User.create(name, email, password);

  return createUser;
};

module.exports = registerService;
