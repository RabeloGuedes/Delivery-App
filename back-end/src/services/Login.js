const crypto = require('crypto');
const { User } = require('../database/models');
const { generateToken } = require('../middlewares/auth');

const loginService = async (email, password) => {
  const criptoPass = crypto.createHash('md5').update(password).digest('hex');
  const getUserById = await User.findOne({ where: { email, password: criptoPass },
    attributes: { exclude: ['password'] } });
  const { id, ...userData } = getUserById.dataValues;
  if (getUserById) {
    const token = generateToken({ email, role: getUserById.role, id });
    return { ...userData, token };
  }
  return userData;
};

module.exports = loginService;
