
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
db = require('./models')

const Op = db.sequelize.Op

db.friendship.findAll({

  include: [
    {
      model: db.users,
      as: 'friends',
      through: 'user_fs',
      attributes: [
        'id', 'name'
      ]

    }

  ],
  where: {userId: 1}

}).then(posts => {
  console.log(posts[0].dataValues.friends)
})

app.listen(3001)
