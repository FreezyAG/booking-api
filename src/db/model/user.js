const userModel = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.STRING
    },
    role: {
      type: DataTypes.STRING
    },
    agentId: {
      type: DataTypes.INTEGER
    },
  }, { timestamps: true });

  User.associate = function (models) {
    User.hasMany(models.User, {
      foreignKey: 'agentId',
      as: 'users',
      onDelete: 'CASCADE'
    });
    
    User.hasMany(models.Booking, {
      foreignKey: 'userId',
      as: 'booked',
      onDelete: 'CASCADE'
    });

    User.hasMany(models.Booking, {
      foreignKey: 'agentId',
      as: 'bookings',
      onDelete: 'CASCADE'
    });
  };

  return User;
};

export default userModel
