'use strict';
module.exports = (sequelize, DataTypes) => {
  const friendship = sequelize.define('friendship', {
    friend1: DataTypes.INTEGER,
    friend2: DataTypes.INTEGER
  }, {});
  friendship.associate = function(models) {
    // associations can be defined here
    friendship.belongsToMany(models.user, { as: 'theFriend', foreignKey: 'friendship', through: 'users_friendships' })
  };
  return friendship;
};