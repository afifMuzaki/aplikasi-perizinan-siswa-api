'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Mapels', [
      {
        mapel: 'Matematika',
        kelasId: 4,
      },
      {
        mapel: 'Bahasa Inggris',
        kelasId: 4,
      },
      {
        mapel: 'PPKn',
        kelasId: 4,
      },
      {
        mapel: 'Bahasa Indonesia',
        kelasId: 4,
      },
      {
        mapel: 'Basa Jawa',
        kelasId: 4,
      },
      {
        mapel: 'PAI',
        kelasId: 4,
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Mapels', null, {});
  }
};
