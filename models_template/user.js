'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    pin: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    // associations can be defined here
    user.belongsToMany(models.friendship, { foreignKey: 'friend', through: 'users_friendships' })
  };
  return user;
};