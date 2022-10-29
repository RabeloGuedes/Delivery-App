const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      // allowNull: false,
      // unique: true,
    },
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    },
    { 
      timestamps: false,
      tableName: 'users',
    }
  );
  
  /* User.associate = (models) => {
  User.hasMany(models.BlogPost, {
  foreignKey: 'userId',
  as: 'posts',
  })
  }; */
  
  return User;
}
  
module.exports = User; 
