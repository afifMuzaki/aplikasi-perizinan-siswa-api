'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Petugas', {
      nip: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER(11)
      },
      nama: {
        type: Sequelize.STRING(30)
      },
      username: {
        type: Sequelize.STRING(30)
      },
      passsword: {
        type: Sequelize.STRING(30)
      },
      role: {
        type: Sequelize.STRING(15),
        defaultValue: 'petugas'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Petugas');
  }
};