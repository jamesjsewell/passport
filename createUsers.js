db = require('./models')

db.user.create(
  {
    fname: 'james',
    lname: 'sewell',
    email: 'james@james.com',
    password: 'password',
    pin: '1234'

  }
)
db.user.create(
  {
    fname: 'bob',
    lname: 'sanders',
    email: 'bob@bob.com',
    password: 'password',
    pin: '3456'

  }
)

db.user.create(
  {
    fname: 'sabrina',
    lname: 'clarington',
    email: 'sabrina@sabrina.com',
    password: 'password',
    pin: '5783'

  }
)

db.user.create(
  {
    fname: 'todd',
    lname: 'jenkins',
    email: 'todd@todd.com',
    password: 'password',
    pin: '4535'

  }
)