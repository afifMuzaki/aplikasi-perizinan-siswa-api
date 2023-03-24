'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Kelas', 
    [
      {
        kelas: 'XII',
        jurusanId: 1,
        rombel: 'A'
      },
      {
        kelas: 'XI',
        jurusanId: 1,
        rombel: 'A'
      },
      {
        kelas: 'X',
        jurusanId: 1,
        rombel: 'A'
      },
      {
        kelas: 'XII',
        jurusanId: 1,
        rombel: 'B'
      },
      {
        kelas: 'XI',
        jurusanId: 1,
        rombel: 'B'
      },
      {
        kelas: 'X',
        jurusanId: 1,
        rombel: 'B'
      },
      {
        kelas: 'XII',
        jurusanId: 1,
        rombel: 'C'
      },
      {
        kelas: 'XI',
        jurusanId: 1,
        rombel: 'C'
      },
      {
        kelas: 'X',
        jurusanId: 1,
        rombel: 'C'
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Kelas', null, {});
  }
};
