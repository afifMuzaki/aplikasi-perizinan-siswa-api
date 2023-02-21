'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('siswas', [
      {
        nis: '20667/1220.065',
        nama: 'M. Afif Muzaki',
        kls: 'XII RPL B',
        username: 'siswa1',
        password: 'siswa1'
      },
      {
        nis: '20668/1220.066',
        nama: 'Ahmad Sutigno',
        kls: 'XII RPL B',
        username: 'siswa2',
        password: 'siswa2'
      },
      {
        nis: '20669/1220.067',
        nama: 'Jhon Doe',
        kls: 'XII RPL B',
        username: 'siswa3',
        password: 'siswa3'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('siswas', null, {});
  }
};
