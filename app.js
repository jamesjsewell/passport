
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
db = require('./models')
const {
  USER,
  FRIENDSHIP,
  USER_FRIENDSHIP_MODEL,
  USER_FRIENDSHIP_THROUGH,
  USER_FRIENDSHIP_AS
} = require('./dbConstants')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))



app.get('/friends_of/:uid', (req, res)=>{
  
  const uid = req.params.uid

  db[FRIENDSHIP].findAll({

    include: [
      {
        model: db[USER],
        as: USER_FRIENDSHIP_AS,
        through: USER_FRIENDSHIP_THROUGH,
        attributes: [
          'id', 'fname', 'lname', 'email', 'pin'
        ]
  
      }
  
    ],
    where: {friend1: uid}
  
  }).then(results => {

    var friendsArray = []

    results.forEach(function(dbRecord){

      // makes sure there is a friendship record
      if(dbRecord && dbRecord.dataValues){

        var friendship = dbRecord.dataValues

        // makes sure the friendship record contains a friend
        if(friendship.theFriend && friendship.theFriend[0] && friendship.theFriend[0].dataValues){
            
          var theFriend = friendship.theFriend[0].dataValues

          // if the friend record is a valid user object, push it in to the friends array
          if(theFriend.id){
            delete theFriend.users_friendships
            friendsArray.push(theFriend)

          }
        
        }

      }
      
    })

    res.json({friends: friendsArray})

  })

})

app.post('/friends_of', (req, res)=>{
  
  const id1 = parseInt(req.body.friend1)
  const id2 = parseInt(req.body.friend2)
  
  //adds a friend to the user's friends list
  createFriends(id1, id2, false)

  //adds the friend to the user's friends list
  createFriends(id2, id1, true)

  function createFriends(friend1, friend2, bothCreated){

    // adds friendship record
    db[FRIENDSHIP].create({
      friend1: friend1,
      friend2: friend2
    }).then(results => {

      const createdFriendship = results.dataValues
      
      // if the friendship was added, join the users together
      if(createdFriendship && createdFriendship.id){
        
        // joins the users together by adding a row to the 'join' table that 
        // contains the id of the friend, and the new friendship they belong to
        db[USER_FRIENDSHIP_MODEL].create({
          friend: friend2,
          friendship: parseInt(createdFriendship.id)
        }).then(function(result){

          // checks to see if both friends have eachother in their friends list
          if(bothCreated){
            res.json({ message: 'friendship added'})
          }
          
        })
  
      }
  
    })

  }

})

app.listen(3001)
