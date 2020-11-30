
exports.up = function(knex) {
    return knex.schema.raw(`CREATE table IF NOT EXISTS users(
        id serial PRIMARY KEY,
        name VARCHAR(100),
        email text UNIQUE NOT NULL
    )`);
};

exports.down = function(knex) {
    knex.schema.dropTable('users');  
};

/*
   make sure your Node version is 12.20.0 or above.  I am using PostgrSQL DB
   on terminal run commands as follows ...
        mkdir knex-migr
        cd knex-migr
        mkdir migrations
        npm init -y
        npm install knex knex-migrate pg
        npx knex init 
         - (above command will create ./knexfile.js file at the root of your proj directory)
         - run ls command to confirm
   
   Add configuration in knexfile.js as follows
   (change values like database user password etc. according to your database settings)
   
   development: {
    client: 'pg',
    connection: {
       database: 'crud_practice_1',
       user: 'postgres',
       password: 'newPassword',
       host:'localhost',
       port:5432
     },
     migrations: {
         directory: __dirname + '/migrations',
     }
   }
  
    
   now execute command as follows in terminal
    knex migrate:make migration_create_table
   
   the output will show you as follows. my project is in directory "knex-migr"
   Created Migration: <your path to project directory>/knex-migr/migrations/20201128094643_migration_create_table.js
   after the above confirmation open this file in editor, it looks like this
   
   exports.up = function(knex) {
   }
   exports.down = function(knex) {
      
   };

   Now fill in the blanks as shown below

   exports.up = function(knex) {
        return knex.schema.raw(`CREATE table IF NOT EXISTS users(
            id serial PRIMARY KEY,
            name VARCHAR(100),
            email text UNIQUE NOT NULL
        )`);
    };

    exports.down = function(knex) {
        knex.schema.dropTable('users');  
    };
   
    once you update the file execute the command as follow
   
    npx knex migrate:latest
   
   the output of above command is as shown below
        Using environment: development
        Batch 1 run: 1 migrations
   
   Now go to another terminal window and and start postgreSQL using two commandds as shown below
        sudo -i -u postgres
        psql
   execute \l command to list all DB the output will be something like below
   postgres=# \l
                                List of databases
        Name       |  Owner   | Encoding | Collate | Ctype |   Access privileges   
    -----------------+----------+----------+---------+-------+-----------------------
    books_api       | postgres | UTF8     | en_IN   | en_IN | 
    crud_practice_1 | postgres | UTF8     | en_IN   | en_IN | 
    ncfapps         | postgres | UTF8     | en_IN   | en_IN | 
    postgres        | postgres | UTF8     | en_IN   | en_IN | 
    template0       | postgres | UTF8     | en_IN   | en_IN | =c/postgres          +
                    |          |          |         |       | postgres=CTc/postgres
    template1       | postgres | UTF8     | en_IN   | en_IN | =c/postgres          +
                    |          |          |         |       | postgres=CTc/postgres
    trello          | postgres | UTF8     | en_IN   | en_IN | 
    (7 rows)

    then execute commands as below
    postgres=# \c crud_practice_1 
    You are now connected to database "crud_practice_1" as user "postgres".
    crud_practice_1=# \dt
            List of relations
    Schema | Name  | Type  |  Owner   
    --------+-------+-------+----------
    public | users | table | postgres
    (1 row)




   
  */
