const express = require('express');
const bodyParser = require('body-parser');
const taskRouter = require('./routes/tasks.router')

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

//add app router
app.use('/tasks', taskRouter);

//listening for requests on port
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});