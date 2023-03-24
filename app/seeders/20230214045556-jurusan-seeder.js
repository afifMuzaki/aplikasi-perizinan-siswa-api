'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Jurusans', [
      {
        jurusan: 'RPL'
      },
      {
        jurusan: 'DPIB'
      },
      {
        jurusan: 'TPM'
      },
      {
        jurusan: 'TPTU'
      },
      {
        jurusan: 'LAS'
      },
      {
        jurusan: 'TBSM'
      },
      {
        jurusan: 'BKP'
      },
      {
        jurusan: 'OI'
      },
      {
        jurusan: 'EI'
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Jurusans', null, {});
  }
};
