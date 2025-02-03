const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

pool.query('SELECT NOW()')
  .then(result => console.log('Database connected:', result.rows[0]))
  .catch(err => console.error('Error connecting to the database:', err));

router.get('/', (req, res) => {
    const query =  `
    SELECT
    class.id AS class_id,
    species.id AS species_id,
    class.class_name,
    species.species_name
        FROM class
             JOIN species
                ON class.id = species.class_id
                ORDER BY class.class_name, species.species_name;`
    
    // YOUR CODE HERE
  pool.query(query)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get zoo anilmals', err);
      res.sendStatus(500)
    })
});



   
module.exports = router;
// The previous developer got stuck and couldn't figure out:
// 1. How to write a SQL join.
// 2. How to implement the `redux-saga` library.

// Everything else in this app is bug-free and finished, including automated tests! Thanks to this, **you'll only need to write code inside two files**:
// 1. `zoo.router.js`
// 2. `store.js`

// There's also a `database.sql` file that you'll use to construct a database with two tables:
// 1. `species`
// 2. `class`

// All that's left for you to do is:
// 1. Create a `GET` route that responds with all of the zoo animal data from the database.
// 2. Make a Saga function that'll fetch the zoo animal data and put it into the `zooAnimals` reducer.
