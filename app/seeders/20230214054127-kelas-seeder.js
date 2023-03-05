'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Kelas', 
    [
      {
        kelas: 'XII',
        jurusanId: 1,
        rombel: 'B'
      },
      {
        kelas: 'XII',
        jurusanId: 2,
        rombel: 'C'
      },
      {
        kelas: 'XII',
        jurusanId: 3,
        rombel: 'A'
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Kelas', null, {});
  }
};
