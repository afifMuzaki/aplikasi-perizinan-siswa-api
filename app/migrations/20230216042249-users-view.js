'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      `CREATE VIEW users AS
      SELECT adminNum AS kredensial, username, password, 'admin' AS role FROM admins UNION ALL SELECT nis AS kredensial, username, password, 'siswa' AS role FROM siswas UNION ALL SELECT nip AS kredensial, username, password, 'guru' AS role FROM gurus UNION ALL SELECT nip AS kredensial, username, password, 'petugas' AS role FROM petugas;`
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      `DROP VIEW users`
    );
  }
};
