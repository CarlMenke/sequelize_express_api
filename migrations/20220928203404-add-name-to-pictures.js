'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('pictures', 'name', 'text')
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('pictures', 'name')
  }
};
