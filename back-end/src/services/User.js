const { Op } = require('sequelize');
const { User } = require('../database/models');

const userService = {
  getAllUsers: async () => {
    const users = await User.findAll({
      attributes: { exclude: ['password'] },
      where: { role: {
        [Op.not]: 'administrator',
      } },
    });
    return users;
  },
  getAllSellers: async () => {
    const sellers = await User.findAll({ where: { role: 'seller' },
    attributes: { exclude: ['password', 'email', 'role'] } });
    return sellers;
  },
  deleteUser: async (id) => {
    const user = await User.findByPk(id);
    if (!user) return { code: 404, message: 'User does not exist' };
    if (user.role === 'administrator') {
      return ({
      code: 401,
      message: 'Administrator can not be deleted',
    });
  }
    await user.destroy();
    return { code: 204, message: '' };
  },
};

module.exports = userService;
