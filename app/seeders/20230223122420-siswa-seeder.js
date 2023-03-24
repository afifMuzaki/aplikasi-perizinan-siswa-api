'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('siswas', [
      {
        nis: '20644/1097.065',
        nama: 'FADILA EKA RISTIANI',
        kelasId: 4,
        username: 'siswa1',
        password: 'siswa1'
      },
      {
        nis: '20645/1098.065',
        nama: 'FADILA ZAINUL DZIKRI',
        kelasId: 4,
        username: 'siswa2',
        password: 'siswa2'
      },
      {
        nis: '20646/1099.065',
        nama: 'FAHMI NUR WIDYANTORO',
        kelasId: 4,
        username: 'siswa3',
        password: 'siswa3'
      },
      {
        nis: '20647/1100.065',
        nama: 'FARO CHATUN NAHDLIYYAH',
        kelasId: 4,
        username: 'siswa4',
        password: 'siswa4'
      },
      {
        nis: '20648/1101.065',
        nama: 'FAUZI NUR RAMADANI',
        kelasId: 4,
        username: 'siswa5',
        password: 'siswa5'
      },
      {
        nis: '20649/1102.065',
        nama: 'FAUZIA ASWIN BAIHAQI',
        kelasId: 4,
        username: 'siswa6',
        password: 'siswa6'
      },
      {
        nis: '20650/1103.065',
        nama: 'FAYZZAL EGA WARDANA',
        kelasId: 4,
        username: 'siswa7',
        password: 'siswa7'
      },
      {
        nis: '20651/1104.065',
        nama: 'FEBRI BAGUS WIRANATA',
        kelasId: 4,
        username: 'siswa8',
        password: 'siswa8'
      },
      {
        nis: '20652/1105.065',
        nama: 'FEBY LUSIANA',
        kelasId: 4,
        username: 'siswa9',
        password: 'siswa9'
      },
      {
        nis: '20653/1106.065',
        nama: 'FERDILAN RAMADHANI',
        kelasId: 4,
        username: 'siswa10',
        password: 'siswa10'
      },
      {
        nis: '20667/1120.065',
        nama: 'M.AFIF MUZAKI',
        kelasId: 4,
        username: 'siswa24',
        password: 'siswa24'
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('siswas', null, {});
  }
};
