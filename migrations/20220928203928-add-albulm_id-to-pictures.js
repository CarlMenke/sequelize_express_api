'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('pictures', 'albulm_id', 'integer')
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('pictures', 'albulm_id')
  }
};
