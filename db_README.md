step 1: 
if there are tables already in the database, delete them
go into the database and if there are migrations in 
the SequelizeMeta table, delete those rows.

step 2: 
sh seq.bash

step 3:
* replace the config.js file in the config folder with the .js file in the config_template folder
* replace the models in the models folder with those in models_template
* replace the migrations in migrations folder with those in migrations_template

step 4: 
sequelize db:migrate

step 5:
node createUsers.js