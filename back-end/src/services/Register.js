const { User } = require('../database/models');

const registerService = async ({ name, email, password, role }) => {
  const createUser = await User.create({ name, email, password, role });
  console.log(createUser, 'console da funcao');
  return createUser;
};

module.exports = registerService;
