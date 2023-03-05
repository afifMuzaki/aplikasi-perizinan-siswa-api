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
      this.belongsTo(models.Jurusan, {
        as: 'kelas-jurusan',
        foreignKey: 'jurusanId',
        targetKey: 'id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });

      this.hasMany(models.Siswa, {
        as: 'kelas-siswa',
        foreignKey: 'kelasId',
        sourceKey: 'id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });

      this.belongsToMany(models.Mapel, {
        through: models.KelasMapel
      });
    }
  }
  Kelas.init({
    kelas: DataTypes.STRING(8),
    jurusanId: DataTypes.INTEGER,
    rombel: DataTypes.ENUM('A', 'B', 'C', 'D')
  }, {
    sequelize,
    modelName: 'Kelas',
  });
  return Kelas;
};