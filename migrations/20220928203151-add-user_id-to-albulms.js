'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('albulms', 'user_id','integer')
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('albulms', 'user_id')
  }
};
