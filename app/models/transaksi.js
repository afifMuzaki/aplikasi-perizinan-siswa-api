'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Izin, {
        as: 'transaksiIzin',
        targetKey: 'id',
        foreignKey: 'izinId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });

      this.belongsTo(models.Guru, {
        as: 'transaksiGuru',
        targetKey: 'nip',
        foreignKey: 'guruNip',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });

      this.belongsTo(models.Petugas, {
        as: 'transaksiPetugas',
        targetKey: 'nip',
        foreignKey: 'petugasNip',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      })
    }
  }
  Transaksi.init({
    izinId: DataTypes.INTEGER,
    guruNip: DataTypes.STRING,
    petugasNip: DataTypes.STRING,
    izin_guru: DataTypes.STRING,
    izin_petugas: DataTypes.STRING,
    catatan_guru: DataTypes.TEXT,
    catatan_petugas: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Transaksi',
  });
  return Transaksi;
};