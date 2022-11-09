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
};

module.exports = userService;
