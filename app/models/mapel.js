'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mapel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      this.belongsToMany(models.Kelas, {
        through: models.KelasMapel
      });
    }
  }
  Mapel.init({
    mapel: DataTypes.STRING(25),
    kelasId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Mapel',
  });
  return Mapel;
};