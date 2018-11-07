# sequelize model:generate --name users \
#     --attributes name:string,email:string,password:string,secretpin:string,friends:integer

# sequelize model:generate --name relationships \
#     --attributes user1:integer,user2:integer

# sequelize model:create --name friendship \
#     --attributes userId:integer,friendId:integer

# sequelize model:create --name user_fs \
#     --attributes userId:integer,friendshipId:integer

rm -fr models
rm -fr migrations
rm -fr seeders
rm -fr config

sequelize init

sequelize model:create --name user \
    --attributes fname:string,lname:string,email:string,password:string,pin:string

sequelize model:create --name friendship \
    --attributes friend1:integer,friend2:integer

sequelize model:create --name users_friendship \
    --attributes friend:integer,friendship:integer
