'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kelas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Jurusan, {
        as: 'kelas-jurusan',
        sourceKey: 'id',
        foreignKey: 'jurusanId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });

      this.hasMany(models.Siswa, {
        as: 'kelas-siswa',
        sourceKey: 'id',
        foreignKey: 'kelasId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });
    }
  }
  Kelas.init({
    kelas: DataTypes.STRING(8),
    jurusanId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Kelas',
  });
  return Kelas;
};