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
        type: Sequelize.INTEGER,
        references: {
          model: 'Gurus',
          key: 'nip'
        }
      },
      petugasNip: {
        type: Sequelize.INTEGER,
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