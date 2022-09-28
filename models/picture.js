'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Picture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Picture.belongsTo(models.User,{
        foreignKey:'user_id',
        as:'owner',
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      }),
      Picture.belongsTo(models.Albulm,{
        foreignKey:'albulm_id',
        as:'albulm',
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      })

    }
  }
  Picture.init({
    name: DataTypes.STRING,
    content: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Picture',
    tableName: 'pictures'
  });
  return Picture;
};