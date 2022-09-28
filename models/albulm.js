'use strict';
const {
  Model
} = require('sequelize');
const user = require('./user');
module.exports = (sequelize, DataTypes) => {
  class Albulm extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Albulm.belongsTo(models.User,{
        foreignKey:'user_id',
        as:'user',
        onDelete:"CASCADE",
        onUpdate:"CASCADE"
      })
    }
  }
  Albulm.init({
    name: DataTypes.STRING,
    content: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Albulm',
    tableName: 'albulms'
  });
  return Albulm;
};