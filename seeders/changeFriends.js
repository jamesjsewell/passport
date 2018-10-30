'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'cock', {type: Sequelize.INTEGER, allowNull: true, defaultValue: 0});
	 
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'cock');
  }
};

// {type: Sequelize.ARRAY(Sequelize.INTEGER) }

// {type: Sequelize.INTEGER }

// {type: 'INTEGER USING CAST("friends" as INTEGER)'}