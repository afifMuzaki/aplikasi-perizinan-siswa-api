'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Jurusans', [
      {
        jurusan: 'RPL',
        rombel: 'B'
      },
      {
        jurusan: 'DPIB',
        rombel: 'C'
      },
      {
        jurusan: 'TPM',
        rombel: 'A'
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Jurusans', null, {});
  }
};
