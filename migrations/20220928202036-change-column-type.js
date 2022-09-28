'use strict';

const { Sequelize } = require("../models");

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.removeColumn('pictures', 'user_id')
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.addColumn('pictures', 'user_id','string')
  }
};
