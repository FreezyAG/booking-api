const moment = require('moment-timezone')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Bookings',
      [
        {
          userId: 3,
          agentId: 1,
          startAt: moment.utc().toDate(),
          finishAt: moment.utc().add(1, 'day').toDate(),
          createdAt: moment.utc().toDate(),
          updatedAt: moment.utc().toDate(),
        },
        {
          userId: 4,
          agentId: 1,
          startAt: moment.utc().toDate(),
          finishAt: moment.utc().add(1, 'day').toDate(),
          createdAt: moment.utc().toDate(),
          updatedAt: moment.utc().toDate(),
        },
        {
          userId: 3,
          agentId: 2,
          startAt: moment.utc().toDate(),
          finishAt: moment.utc().add(1, 'day').toDate(),
          createdAt: moment.utc().toDate(),
          updatedAt: moment.utc().toDate(),
        },
        {
          userId: 4,
          agentId: 2,
          startAt: moment.utc().toDate(),
          finishAt: moment.utc().add(1, 'day').toDate(),
          createdAt: moment.utc().toDate(),
          updatedAt: moment.utc().toDate(),
        },
      ],
      {},
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Bookings', null, {})
  }
};
