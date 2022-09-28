'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Albulm, {
        foreignKey: 'user_id',
        as:'albulms',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }),
      User.hasMany(models.Picture,{
        foreignKey:'user_id',
        as: 'pictures',
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      })
    }
  }
  User.init({
    name: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};