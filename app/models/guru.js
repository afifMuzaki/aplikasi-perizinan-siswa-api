'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Guru extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.izin, {
        sourceKey: 'nip',
        foreignKey: 'guruNip',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });

      this.hasMany(models.transaksi, {
        sourceKey: 'nip',
        foreignKey: 'guruNip',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });

      this.belongsToMany(models.mapel, {
        targetKey: 'id',
        foreignKey: 'mapelId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });
    }
  }
  Guru.init({
    nip: {
      type: DataTypes.STRING(30),
      unique: true,
      allowNull: false
    },
    nama: DataTypes.STRING(30),
    username: DataTypes.STRING(30),
    password: DataTypes.STRING(30),
    mapelId: DataTypes.INTEGER,
    role: {
      type: DataTypes.STRING(15),
      defaultValue: 'guru'
    }
  }, {
    sequelize,
    modelName: 'Guru',
  });
  return Guru;
};