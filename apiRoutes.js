const fs = require('fs');
const db = require('db.json');
//Export api routes to import on server.js
module.exports = (app) => {

    //GET to read the db.json file and return all saved notes as JSON
    app.get('/api/notes', (req, res) => {
        fs.readFile('./db.json', {}, (err) => {
            if (err) {
                console.log(err);
            }
        })
    });
    
    //POST to receive a new note to save on the request body, add it to the db.json, and then return the new note tothe client
    app.post('/api/notes', {}, (req, res) => {
    
    })
    
    //DELETE to receive a query param containing the id of the note to delete
    //Each note will need a unique id
    app.delete('api/notes/:id', )

};



