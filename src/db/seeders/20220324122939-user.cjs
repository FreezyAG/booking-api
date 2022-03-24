'use strict';

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
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Jon',
          lastName: 'Doe',
          email: 'jondoe@example.com',
          type: 'agent',
          role: 'regular',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Jean',
          lastName: 'Doe',
          email: 'jeandoe@example.com',
          type: 'user',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Foo',
          lastName: 'Doe',
          email: 'foodoe@example.com',
          type: 'user',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {})
  }
};
