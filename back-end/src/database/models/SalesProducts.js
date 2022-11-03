const SalesProducts = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SalesProducts', {
    saleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, { 
    timestamps: false,
    tableName: 'SalesProducts',
    underscored: true,
  });

  SalesProducts.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      foreignKey: 'saleId',
      as: 'sale',
      through: SalesProducts,
      otherKey: 'productId',
    });
    models.Product.belongsToMany(models.Sale, {
      foreignKey: 'productId',
      as: 'product',
      through: SalesProducts,
      otherKey: 'saleId',
    });
  }

  return SalesProducts;
};

module.exports = SalesProducts;
