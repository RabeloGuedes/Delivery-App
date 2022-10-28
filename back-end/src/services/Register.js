const crypto = require('crypto');
const { User } = require('../database/models');

const registerService = async ({ name, email, password, role }) => {
  const validPassword = crypto.createHash('sha256').update(password).digest('hex');
  const createUser = await User.create({ 
    name, 
    email, 
    password: validPassword, 
    role });
  return createUser;
};

module.exports = registerService;