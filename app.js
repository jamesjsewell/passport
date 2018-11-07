
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
db = require('./models')

const Op = db.sequelize.Op

db.friendship.findAll({

  include: [
    {
      model: db.users,
      as: 'theFriend',
      through: 'user_fs',
      attributes: [
        'id', 'name'
      ]

    }

  ],
  where: {userId: 1}

}).then(posts => {
  posts.forEach(function(post){
    var friendship = post.dataValues
    var theFriend = friendship.theFriend[0].dataValues
    console.log(theFriend.name)
  })
})

app.listen(3001)
