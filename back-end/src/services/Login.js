const crypto = require('crypto');
const { User } = require('../database/models');
const { generateToken } = require('../middlewares/auth');

const loginService = async (email, password) => {
  const criptoPass = crypto.createHash('md5').update(password).digest('hex');
  const getUserById = await User.findOne({ where: { email, password: criptoPass },
     attributes: { exclude: ['id', 'password'] } });
  if (getUserById) {
    const token = generateToken({ email, role: getUserById.role });
    return { ...getUserById.dataValues, token };
  }
  return getUserById;
};

module.exports = loginService;
