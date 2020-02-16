//client connections here
// (whats usually in the server(get / put / post / delete))
//module.exports = ;
const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

//GET
router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "tasks";';
    pool.query(queryText).then(result => {
      // Sends back the results in an object
      res.send(result.rows);
    })
    .catch(error => {
      console.log('error getting books', error);
      res.sendStatus(500);
    });
});

//POST
router.post('/',  (req, res) => {
  let newTask = req.body;
  console.log(newTask);
  let queryText = `INSERT INTO "tasks" ("task", "notes") VALUES ($1, $2);`;
  pool.query(queryText, [newTask.task, newTask.notes]).then((result) => {
      console.log('task added to list');
      res.sendStatus(201);
    }).catch((error) => {
      console.log(`Cannot add to list`, error);
      res.sendStatus(500);
    });
});



module.exports = router;