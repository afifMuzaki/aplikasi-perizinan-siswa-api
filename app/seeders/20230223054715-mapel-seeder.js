'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Mapels', [
      {
        mapel: 'Matematika',
        kelasId: 1,
      },
      {
        mapel: 'Bahasa Inggris',
        kelasId: 1,
      },
      {
        mapel: 'PPKn',
        kelasId: 1,
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Mapels', null, {});
  }
};
