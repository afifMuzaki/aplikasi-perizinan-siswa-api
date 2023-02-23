'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Kelas', 
    [
      {
        kelas: 'XII',
        jurusanId: 1
      },
      {
        kelas: 'XII',
        jurusanId: 2
      },
      {
        kelas: 'XII',
        jurusanId: 3
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Kelas', null, {});
  }
};
