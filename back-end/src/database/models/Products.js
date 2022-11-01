const Product = (sequelize, DataTypes) => {
  const User = sequelize.define("Product", {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(4,2),
    url_image: DataTypes.STRING,
    },
    { 
      timestamps: false,
      tableName: 'products',
    }
  );
  
  return Product;
}
  
module.exports = Product; 
