const moment = require('moment-timezone')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          firstName: 'Jane',
          lastName: 'Doe',
          email: 'janedoe@example.com',
          type: 'agent',
          role: 'admin',
          createdAt: moment.utc().toDate(),
          updatedAt: moment.utc().toDate(),
        },
        {
          firstName: 'Jon',
          lastName: 'Doe',
          email: 'jondoe@example.com',
          type: 'agent',
          role: 'regular',
          createdAt: moment.utc().toDate(),
          updatedAt: moment.utc().toDate(),
        },
        {
          firstName: 'Jean',
          lastName: 'Doe',
          email: 'jeandoe@example.com',
          type: 'user',
          agentId: 1,
          createdAt: moment.utc().toDate(),
          updatedAt: moment.utc().toDate(),
        },
        {
          firstName: 'Foo',
          lastName: 'Doe',
          email: 'foodoe@example.com',
          type: 'user',
          agentId: 2,
          createdAt: moment.utc().toDate(),
          updatedAt: moment.utc().toDate(),
        },
      ],
      {},
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {})
  }
};
