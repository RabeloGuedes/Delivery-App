const Product = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    price: DataTypes.NUMBER,
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
