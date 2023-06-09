'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Satpam extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Satpam.init({
    nama: DataTypes.STRING(30),
    username: DataTypes.STRING(30),
    password: DataTypes.STRING(30),
    role: {
      type: DataTypes.STRING(15),
      defaultValue: 'satpam'
    }
  }, {
    sequelize,
    modelName: 'Satpam',
  });
  return Satpam;
};