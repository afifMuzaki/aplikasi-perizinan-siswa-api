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
        as: 'transaksi-izin',
        targetKey: 'id',
        foreignKey: 'izinId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });

      this.belongsTo(models.Guru, {
        as: 'transaksi-guru',
        targetKey: 'nip',
        foreignKey: 'guruNip',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });

      this.belongsTo(models.Petugas, {
        as: 'transaksi-petugas',
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
    izin_guru: DataTypes.BOOLEAN,
    izin_petugas: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Transaksi',
  });
  module.exports = Transaksi;
  return Transaksi;
};