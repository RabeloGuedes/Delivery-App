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
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    }
    },
    { 
      timestamps: false,
      tableName: 'sales',
      underscored: true,
    }
  );
  
  Sale.associate = (models) => {
    Sale.belongsTo(models.User,
      { foreignKey: 'userId', as: 'users' });
    Sale.belongsTo(models.User,
      { foreignKey: 'sellerId', as: 'sellers' });
  };

  return Sale;
}
  
module.exports = Sale;

// Matches.belongsTo(Team, { foreignKey: 'homeTeam', as: 'teamHome' });
// Matches.belongsTo(Team, { foreignKey: 'awayTeam', as: 'teamAway' });

// Team.hasMany(Matches, { foreignKey: 'homeTeam', as: 'homeTeamMatches' });
// Team.hasMany(Matches, { foreignKey: 'awayTeam', as: 'awayTeamMatches' }); 