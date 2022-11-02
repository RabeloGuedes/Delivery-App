const Sale = (sequelize, DataTypes) => {
  const Sale = sequelize.define("Sale", {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    seller_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    delivery_address: {
      type: DataTypes.STRING,
      allowNul: false,
    },
    delivery: {
      type: DataTypes.STRING,
      allowNul: false,
    },
    sale_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    }
    },
    { 
      timestamps: false,
      tableName: 'sales',
      underScored: true,
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
