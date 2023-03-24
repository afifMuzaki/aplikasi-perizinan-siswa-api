'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('kategoris', [
      {
        kategori: 'Sakit',
        deskripsi: 'Izin sakit diberikan kepada siswa saat dilingkungan sekolah siswa mungkin mengalami kecelakaan atau hendak untuk melakukan pemeriksaan kesehatan'
      },
      {
        kategori: 'Dispensasi',
        deskripsi: 'Izin dispensasi diberikan kepada siswa saat dilingkungan sekolah siswa ikut berpartisipasi dalam kegiatan sekolah seperti; kegiatan sosialisasi atau kegiatan ekstrakulikuler'
      },
      {
        kategori: 'Legalisir Ijasah',
        deskripsi: 'Izin legalisir ijasah diberikan kepada siswa saat siswa hendak mengurus dokumen kelulusan dari SMP masing-masing'
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('kategoris', null, {});
  }
};
