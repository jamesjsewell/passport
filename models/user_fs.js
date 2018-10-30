'use strict'
module.exports = (sequelize, DataTypes) => {
  const user_fs = sequelize.define('user_fs', {
    userId: DataTypes.INTEGER,
    friendshipId: DataTypes.INTEGER
  }, {})
  user_fs.associate = function (models) {
    // associations can be defined here

  }
  return user_fs
}
