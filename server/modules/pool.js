const pg = require('pg');
let pool;

let databaseName = '6_sagas';

// This makes sure our queries are sent to the prime_test
// database that gets created and populated each time you
// run the automated tests:
if (process.env.NODE_ENV === 'test') {
  databaseName = 'prime_testing'
}

// When our app is deployed to the internet 
// we'll use the DATABASE_URL environment variable
// to set the connection info: web address, username/password, db name
// eg: 
//  DATABASE_URL=postgresql://jDoe354:secretPw123@some.db.com/prime_app
if (process.env.DATABASE_URL) {
    pool = new pg.Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });
}
// When we're running this app on our own computer
// we'll connect to the postgres database that is 
// also running on our computer (localhost)
else {
    pool = new pg.Pool({
        host: 'localhost',
        port: 5432,
        database: databaseName,
        allowExitOnIdle: true,
    });
}

module.exports = pool;
