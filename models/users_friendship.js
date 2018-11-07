'use strict';
module.exports = (sequelize, DataTypes) => {
  const users_friendship = sequelize.define('users_friendship', {
    friend: DataTypes.INTEGER,
    friendship: DataTypes.INTEGER
  }, {});
  users_friendship.associate = function(models) {
    // associations can be defined here
  };
  return users_friendship;
};