'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Admin.init({
    adminNum: {
      type: DataTypes.STRING(30),
      unique: true,
      allowNull: false
    },
    nama: DataTypes.STRING(30),
    username: DataTypes.STRING(30),
    password: DataTypes.STRING(30),
    role: {
      type: DataTypes.STRING(15),
      defaultValue: 'admin'
    }
  }, {
    sequelize,
    modelName: 'Admin',
  });
  return Admin;
};