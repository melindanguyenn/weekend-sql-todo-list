const express = require('express');
const bodyParser = require('body-parser');
const booksRouter = require('./routes/book.router.js');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

//add app router

// Serve back static files by default
app.use(express.static('server/public'))

//listening for requests on port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});