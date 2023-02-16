'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Izins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      siswaNis: {
        type: Sequelize.STRING,
        references: {
          model: 'Siswas',
          key: 'nis'
        }
      },
      guruNip: {
        type: Sequelize.STRING,
        references: {
          model: 'Gurus',
          key: 'nip'
        }
      },
      kategoriId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Kategoris',
          key: 'id'
        }
      },
      mapel: {
        type: Sequelize.JSON
      },
      alasan: {
        type: Sequelize.TEXT
      },
      waktu_izin: {
        type: Sequelize.TIME
      },
      waktu_kembali: {
        type: Sequelize.TIME
      },
      tggl: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
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
    await queryInterface.dropTable('Izins');
  }
};