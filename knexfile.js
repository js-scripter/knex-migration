// Update with your config settings.

module.exports = {

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
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
