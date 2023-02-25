'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Petugas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Transaksi, {
        as: 'petugas-transaksi',
        sourceKey: 'nip',
        foreignKey: 'petugasNip',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });
    }
  }
  Petugas.init({
    nip: {
      type: DataTypes.STRING(30),
      unique: true,
      allowNull: false
    },
    nama: DataTypes.STRING(30),
    username: DataTypes.STRING(30),
    password: DataTypes.STRING(30),
    role: {
      type: DataTypes.STRING(15),
      defaultValue: 'petugas'
    }
  }, {
    sequelize,
    modelName: 'Petugas',
  });
  return Petugas;
};