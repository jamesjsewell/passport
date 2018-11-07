'use strict'
module.exports = (sequelize, DataTypes) => {
  const user_fs = sequelize.define('user_fs', {
    userId: DataTypes.INTEGER,
    friendshipId: DataTypes.INTEGER
  }, {})
  user_fs.associate = function (models) {
    // associations can be defined here
    //user_fs.hasMany(models.users, { foreignKey: 'id' })
    // user_fs.hasMany(models.users)

  }
  return user_fs
}
