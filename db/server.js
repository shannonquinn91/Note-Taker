const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//GET request route to notes.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

//GET request route to index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

// ===========================================================
app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
  });