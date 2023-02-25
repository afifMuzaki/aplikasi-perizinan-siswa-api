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
      this.belongsTo(models.Kelas, {
        as: 'jurusan-kelas',
        targetKey: 'id',
        foreignKey: 'jurusanId',
        onUpdate: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Jurusan.init({
    jurusan: DataTypes.STRING(30),
    rombel: DataTypes.ENUM('A', 'B', 'C', 'D')
  }, {
    sequelize,
    modelName: 'Jurusan',
  });
  return Jurusan;
};