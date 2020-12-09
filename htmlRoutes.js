const path = require('path');
//Export html routes to import on server.js
module.exports = (app) => {

    //GET request route to index.html
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    });
    
    //GET request route to notes.html
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, './public/notes.html'))
    });
};


