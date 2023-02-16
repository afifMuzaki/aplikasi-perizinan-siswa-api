'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('petugas', [
      {
        nip: '19880407 199609 1 008',
        nama: 'Petugas 1',
        username: 'petugas1',
        password: 'petugas1'
      },
      {
        nip: '19830507 200003 1 024',
        nama: 'Petugas 2',
        username: 'petugas2',
        password: 'petugas2'
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('petugas', null, {});
  }
};
