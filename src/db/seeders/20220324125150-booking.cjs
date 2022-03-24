'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Bookings',
      [
        {
          userId: 3,
          agentId: 1,
          startAt: new Date(),
          finishAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          agentId: 2,
          startAt: new Date(),
          finishAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          agentId: 2,
          startAt: new Date(),
          finishAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Bookings', null, {})
  }
};
