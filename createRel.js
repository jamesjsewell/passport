db = require('./models')

//create

db.friendship.create(
    {userId: 3,
    friendId: 4
    }
)
db.friendship.create(
    {userId: 3,
    friendId: 5
    }
)
db.friendship.create(
    {userId: 4,
    friendId: 6
    }
)
db.friendship.create(
    {userId: 4,
    friendId: 7
    }
)
// db.relationships.create(
//     {userId: 5,
//     friendId: [1,2,3,4]
//     }
// )