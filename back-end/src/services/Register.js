const crypto = require('crypto');
const { User } = require('../database/models');

const verifyUserRegister = async (name, email) => {
  const getUserById = await User.findOne({ where: { name, email } });

  return getUserById;
};

const registerService = async ({ name, email, password, role }) => {
  const validPassword = crypto.createHash('md5').update(password).digest('hex');
  const createUser = await User.create({ 
    name, 
    email, 
    password: validPassword, 
    role });
  return createUser;
};

module.exports = { verifyUserRegister, registerService };