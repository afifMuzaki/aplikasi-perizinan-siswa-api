'use strict';
const {
  Model, where
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Izin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Siswa, {
        as: 'izinSiswa',
        targetKey: 'nis',
        foreignKey: 'siswaNis',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });

      this.belongsTo(models.Guru, {
        as: 'izinGuru',
        targetKey: 'nip',
        foreignKey: 'guruNip',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });

      this.belongsTo(models.Kategori, {
        as: 'izinKategori',
        targetKey: 'id',
        foreignKey: 'kategoriId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });

      this.hasOne(models.Transaksi, {
        as: 'izinTransaksi',
        sourceKey: 'id',
        foreignKey: 'izinId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });
    }
  }
  Izin.init({
    siswaNis: DataTypes.STRING,
    guruNip: DataTypes.STRING,
    kategoriId: DataTypes.STRING,
    mapel: DataTypes.JSON,
    alasan: DataTypes.TEXT,
    waktu_izin: DataTypes.TIME,
    waktu_kembali: DataTypes.TIME,
    tggl: {
      type: DataTypes.DATE,
      defaultValue: new Date()
    }
  }, {
    sequelize,
    modelName: 'Izin',
  });

  Izin.afterCreate(async (instance, option) => {
    const transaksi = sequelize.models.Transaksi;

    const data = {
      izinId: instance.id,
      guruNip: instance.guruNip,
      petugasNip: null,
      izin_guru: 'Proses',
      izin_petugas: 'Proses'
    };
    await transaksi.create(data, { transaction: option.transaction });
  });

  Izin.afterDestroy(async (instance, option) => {
    const transaksi = sequelize.models.Transaksi;

    console.log(instance.id);
    await transaksi.destroy({ where: {
      izinId: instance.id
    } })
  })
  return Izin;
};