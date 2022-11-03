const SalesProducts = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SalesProducts', {
    salesId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productsId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });

  SalesProducts.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      foreignKey: 'productId',
      as: 'sale',
      through: SalesProducts,
      otherKey: 'saleId',
    });
    models.Product.belongsToMany(models.Sale, {
      foreignKey: 'saleId',
      as: 'product',
      through: SalesProducts,
      otherKey: 'productId',
    });
  }

  return SalesProducts;
};

module.exports = SalesProducts;
