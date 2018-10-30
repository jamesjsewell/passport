'use strict'
module.exports = (sequelize, DataTypes) => {
  const friendship = sequelize.define('friendship', {
    userId: DataTypes.INTEGER,
    friendId: DataTypes.INTEGER
  }, {})
  friendship.associate = function (models) {
    friendship.belongsToMany(models.users, { as: 'friends', foreignKey: 'friendshipId', through: 'user_fs' })
  }
  return friendship
}
