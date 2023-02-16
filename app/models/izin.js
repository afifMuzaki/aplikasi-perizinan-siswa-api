'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Izin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
  return Izin;
};