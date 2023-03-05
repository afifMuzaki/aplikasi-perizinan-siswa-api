'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Siswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Izin, {
        as: 'siswa-izin',
        sourceKey: 'nis',
        foreignKey: 'siswaNis',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });

      this.belongsTo(models.Kelas, {
        as: 'siswa-kelas',
        targetKey: 'id',
        foreignKey: 'kelasId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });
    }
  }
  Siswa.init({
    nis: {
      type: DataTypes.STRING(30),
      unique: true,
      allowNull: false
    },
    nama: DataTypes.STRING(30),
    kelasId: DataTypes.INTEGER,
    username: DataTypes.STRING(30),
    password: DataTypes.STRING(30),
    role: {
      type: DataTypes.STRING(15),
      defaultValue: 'siswa'
    }
  }, {
    sequelize,
    modelName: 'Siswa',
  });
  return Siswa;
};