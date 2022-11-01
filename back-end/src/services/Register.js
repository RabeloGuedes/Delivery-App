const crypto = require('crypto');
const { User } = require('../database/models');

const error = { status: 409, message: 'User already registered' };

const registerService = async ({ name, email, password, role }) => {
  const validPassword = crypto.createHash('md5').update(password).digest('hex');
  const verifyName = await User.findOne({ where: { name } });
  const verifyEmail = await User.findOne({ where: { email } });

  if (verifyName || verifyEmail) return error;

  const createUser = await User.create({
    name,
    email,
    password: validPassword,
    role });
  return createUser;
};

module.exports = { registerService };