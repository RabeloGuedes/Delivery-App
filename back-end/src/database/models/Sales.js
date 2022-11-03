const Sale = (sequelize, DataTypes) => {
  const Sale = sequelize.define("Sale", {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sellerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    totalPrice: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    deliveryAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deliveryNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    saleDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    }
    },
    { 
      timestamps: false,
      tableName: 'sales',
      // underscored: true,
    }
  );
  
  Sale.associate = (models) => {
    Sale.belongsTo(models.User,
      { foreignKey: 'userId', as: 'users' });
    Sale.belongsTo(models.User,
      { foreignKey: 'sellerId', as: 'sellers' });
    Sale.hasMany(models.SalesProducts, {
        foreignKey: 'saleId',
        as: 'salesProducts',
      })
  };

  return Sale;
}
  
module.exports = Sale;
