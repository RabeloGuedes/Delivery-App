const crypto = require('crypto');
const { User } = require('../database/models');
const { generateToken } = require('../middlewares/auth');

const loginService = async (email, password) => {
  const criptoPass = crypto.createHash('md5').update(password).digest('hex');
  const getUserById = await User.findOne({ where: { email, password: criptoPass },
    attributes: { exclude: ['password'] } });
    if (getUserById) {
    const { id, ...userData } = getUserById.dataValues;
    const token = generateToken({ email, role: getUserById.role, id });
    return { ...userData, token };
  }
  return getUserById;
};

module.exports = loginService;
