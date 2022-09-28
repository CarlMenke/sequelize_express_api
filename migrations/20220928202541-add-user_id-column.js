'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('pictures', 'user_id','integer')
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('pictures', 'user_id')
  }
};
