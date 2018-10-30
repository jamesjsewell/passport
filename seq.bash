# sequelize model:generate --name users \
#     --attributes name:string,email:string,password:string,secretpin:string,friends:integer

# sequelize model:generate --name relationships \
#     --attributes user1:integer,user2:integer

# sequelize model:create --name friendship \
#     --attributes userId:integer,friendId:integer

sequelize model:create --name user_fs \
    --attributes userId:integer,friendshipId:integer