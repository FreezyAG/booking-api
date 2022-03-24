const bookingModel = (sequelize, DataTypes) => {
  const Booking = sequelize.define("Booking", {
    userId: DataTypes.INTEGER,
    agentId: DataTypes.INTEGER,
    startAt: DataTypes.DATE,
    finishAt: DataTypes.DATE
  }, { timestamps: true });

  Booking.associate = function (models) {
    Booking.belongsTo(models.User, {
      foreignKey: 'agentId',
      as: 'bookedBy'
    });

    Booking.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'booked'
    });
  };

  return Booking;
};

export default bookingModel
