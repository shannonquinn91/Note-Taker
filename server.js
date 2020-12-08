const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//Import HTML routes
const html = require('./htmlRoutes')(app);

//Import API routes
//const api = require('./apiRoutes')(app); 

// ===========================================================
app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
  });