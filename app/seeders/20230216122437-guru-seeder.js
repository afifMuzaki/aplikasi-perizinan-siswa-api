'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('gurus', [
      {
        nip: '19770407 198703 2 005',
        nama: 'Guru 1',
        username: 'guru1',
        password: 'guru1',
        mapelId: 2
      },
      {
        nip: '19830807 199903 6 012',
        nama: 'Guru 2',
        username: 'guru2',
        password: 'guru2',
        mapelId: 1
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('gurus', null, {});
  }
};
