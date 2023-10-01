'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, DataTypes) {   
    await queryInterface.createTable('log', {      
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      level: { type: DataTypes.STRING },
      message: { type: DataTypes.STRING },
      meta: { type: DataTypes.STRING },
      timestamp: { type: DataTypes.DATE }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('log');
  }
};
