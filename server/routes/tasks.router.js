//client connections here
// (whats usually in the server(get / put / post / delete))
//module.exports = ;
const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

//GET
router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "tasks" ORDER BY status;';
    pool.query(queryText).then(result => {
      // Sends back the results in an object
      res.send(result.rows);
    })
    .catch(error => {
      console.log('error getting task', error);
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
      console.log(`in post`, error);
      res.sendStatus(500);
    });
});

//PUT
router.put('/:id', (req, res) => {
  let tasks = req.body; // what to update
  let id = req.params.id; // id to update
  console.log(`update task ${id} to`, tasks.status);
  let queryString = `UPDATE "tasks" SET "status" = ($1) WHERE "id" = ($2)`
  pool.query(queryString, [tasks.status, req.params.id]).then((results) => {
      res.sendStatus(201);
  }).catch((error) => {
    console.log('in put',error);
    res.sendStatus(500);
  });
});


//DELETE
router.delete('/:id',  (req, res) => {
  let id = req.params.id;
  console.log('deleting this', id);
  let queryString = `DELETE FROM "tasks" WHERE "id" = ($1)`;
  pool.query(queryString, [req.params.id]).then((results) => {
      console.log('task deleted');
      res.sendStatus(200);
  }).catch((err) => {
      console.log('in delete',error);
      res.sendStatus(500);
  })
});


module.exports = router;