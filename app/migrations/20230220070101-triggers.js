'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      CREATE TRIGGER tambah_user_admin
      AFTER INSERT ON admins
      FOR EACH ROW
      INSERT INTO users(kredensial, username, password, role) 
      VALUES(new.adminNum, new.username, new.password, new.role)
    `);
    await queryInterface.sequelize.query(`
      CREATE TRIGGER update_user_admin
      AFTER UPDATE ON admins
      FOR EACH ROW
      UPDATE users SET kredensial = new.adminNum, username = new.username, password = new.password WHERE kredensial = old.adminNum
    `);
    await queryInterface.sequelize.query(`
      CREATE TRIGGER hapus_user_admin
      AFTER DELETE ON admins
      FOR EACH ROW
      DELETE FROM users WHERE (kredensial = old.adminNum)
    `);

    await queryInterface.sequelize.query(`
      CREATE TRIGGER tambah_user_petugas
      AFTER INSERT ON petugas
      FOR EACH ROW
      INSERT INTO users(kredensial, username, password, role) 
      VALUES(new.nip, new.username, new.password, new.role)
    `);
    await queryInterface.sequelize.query(`
      CREATE TRIGGER update_user_petugas
      AFTER UPDATE ON petugas
      FOR EACH ROW
      UPDATE users SET kredensial = new.nip, username = new.username, password = new.password WHERE kredensial = old.nip
    `);
    await queryInterface.sequelize.query(`
      CREATE TRIGGER hapus_user_petugas
      AFTER DELETE ON petugas
      FOR EACH ROW
      DELETE FROM users WHERE (kredensial = old.nip)
    `);

    await queryInterface.sequelize.query(`
      CREATE TRIGGER tambah_user_siswa
      AFTER INSERT ON siswas
      FOR EACH ROW
      INSERT INTO users(kredensial, username, password, role) 
      VALUES(new.nis, new.username, new.password, new.role)
    `);

    await queryInterface.sequelize.query(`
      CREATE TRIGGER tambah_user_guru
      AFTER INSERT ON gurus
      FOR EACH ROW
      INSERT INTO users(kredensial, username, password, role) 
      VALUES(new.nip, new.username, new.password, new.role)
    `);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`DROP TRIGGER IF EXISTS tambah_user_admin`);
    await queryInterface.sequelize.query(`DROP TRIGGER IF EXISTS update_user_admin`);
    await queryInterface.sequelize.query(`DROP TRIGGER IF EXISTS hapus_user_admin`);
    await queryInterface.sequelize.query(`DROP TRIGGER IF EXISTS tambah_user_petugas`);
    await queryInterface.sequelize.query(`DROP TRIGGER IF EXISTS update_user_petugas`);
    await queryInterface.sequelize.query(`DROP TRIGGER IF EXISTS hapus_user_petugas`);
    await queryInterface.sequelize.query(`DROP TRIGGER IF EXISTS tambah_user_siswa`);
    await queryInterface.sequelize.query(`DROP TRIGGER IF EXISTS tambah_user_guru`);
  }
};
