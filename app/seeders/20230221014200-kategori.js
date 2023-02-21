'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('kategoris', [
      {
        kategori: 'Sakit'
      },
      {
        kategori: 'Dispensasi'
      },
      {
        kategori: 'Legalisir Ijasah'
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('kategoris', null, {});
  }
};
