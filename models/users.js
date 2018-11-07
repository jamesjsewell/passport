'use strict'
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    secretpin: DataTypes.STRING,
    friends: DataTypes.INTEGER
  }, {})
  users.associate = function (models) {
    users.belongsToMany(models.friendship, { foreignKey: 'userId', through: 'user_fs' })
  }
  return users
}
