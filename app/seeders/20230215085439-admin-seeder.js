'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('admins', [
      {
        adminNum: 'admin-001',
        nama: 'Admin 1',
        username: 'admin1',
        password: '1234567890',
      },
      {
        adminNum: 'admin-002',
        nama: 'Admin 2',
        username: 'admin2',
        password: '12345678910',
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('admins', null, {});
  }
};
