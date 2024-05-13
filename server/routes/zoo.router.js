const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


router.get('/', (req, res) => {
    // YOUR CODE HERE
    const query = `
    SELECT * FROM "class"
      ORDER BY "class_name" ASC;
  `;
  pool.query(query)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get class', err);
      res.sendStatus(500)
    })
});


router.get("/:id", (req, res) => {
    const query = `
      SELECT 
          species.species_name 
      FROM 
          species
      JOIN 
          species_name ON species.id = species_name.species_id
      JOIN 
          class ON class.id = class_name.class_id
      WHERE 
          class.id = $1;
    `;
    pool
      .query(query, [req.params.id])
      .then((result) => {
        res.send(result.rows);
      })
      .catch((err) => {
        console.error("Error fetching genres:", err);
        res.sendStatus(500);
      });
  });
   
// module.exports = router;
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
