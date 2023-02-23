'use strict';
const {
  Model, where
} = require('sequelize');
// const db = require('.');
// const transaksi = db.Transaksi;
module.exports = (sequelize, DataTypes) => {
  class Izin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.siswa, {
        targetKey: 'nis',
        foreignKey: 'siswaNis',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });

      this.belongsToMany(models.guru, {
        targetKey: 'nip',
        foreignKey: 'guruNip',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });

      this.belongsToMany(models.kategori, {
        targetKey: 'id',
        foreignKey: 'kategoriId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });

      this.hasOne(models.transaksi, {
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
    tggl: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Izin',
  });

  Izin.afterCreate(async (instance, option) => {
    const transaksi = sequelize.models.Transaksi;
    const izin = sequelize.models.Izin

    const data = {
      izinId: instance.id,
      guruNip: instance.guruNip,
      petugasNip: null,
      izin_guru: false,
      izin_petugas: false
    };
    await transaksi.create(data, { transaction: option.transaction });
  });
  return Izin;
};