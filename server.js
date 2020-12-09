const express = require('express');
const path = require('path');
const fs = require('fs');
const db = require('./db/db.json');

const app = express();
const PORT = process.env.PORT || 3000;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//Import API routes
const api = require('./routes/apiRoutes')(app);

//Import HTML routes
const html = require('./routes/htmlRoutes')(app);
// ===========================================================
app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
  });