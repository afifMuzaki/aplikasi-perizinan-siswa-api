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
      // define association here
    }
  }
  Transaksi.init({
    izinId: DataTypes.INTEGER,
    guruNip: DataTypes.INTEGER,
    petugasNip: DataTypes.INTEGER,
    izin_guru: DataTypes.BOOLEAN,
    izin_petugas: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Transaksi',
  });
  return Transaksi;
};