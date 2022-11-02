'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('sales', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id',
        },
      },
      seller_id: {
        type: Sequelize.INTEGER,
        allowNul: false,
        field: 'seller_id',
        references: {
          model: 'users',
          key: 'id',
        },
      },
      delivery_address: {
        type: Sequelize.STRING,
        allowNul: false,
      },
      delivery: {
        type: Sequelize.STRING,
        allowNul: false,
      },
      sale_date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('sales');
  }
};
