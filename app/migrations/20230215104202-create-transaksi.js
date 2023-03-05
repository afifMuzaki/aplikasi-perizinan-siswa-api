'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Transaksis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      izinId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Izins',
          key: 'id'
        }
      },
      guruNip: {
        type: Sequelize.STRING,
        references: {
          model: 'Gurus',
          key: 'nip'
        }
      },
      petugasNip: {
        type: Sequelize.STRING,
        references: {
          model: 'Petugas',
          key: 'nip'
        }
      },
      izin_guru: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      izin_petugas: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      catatan_guru: {
        type: Sequelize.TEXT
      },
      catatan_petugas: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Transaksis');
  }
};