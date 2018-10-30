'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'email', {type: Sequelize.INTEGER });
	 
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'email', {type: Sequelize.STRING } );
  }
}

// {type: Sequelize.ARRAY(Sequelize.INTEGER) }

// {type: Sequelize.INTEGER }
