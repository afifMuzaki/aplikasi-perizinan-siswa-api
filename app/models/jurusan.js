'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jurusan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Kelas, {
        as: 'jurusan-kelas',
        foreignKey: 'jurusanId',
        sourceKey: 'id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });
    }
  }
  Jurusan.init({
    jurusan: DataTypes.STRING(30)
  }, {
    sequelize,
    modelName: 'Jurusan',
  });
  return Jurusan;
};