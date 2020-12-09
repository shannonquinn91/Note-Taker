const fs = require('fs');
const db = require('../db/db.json');

//Export api routes to import on server.js
module.exports = (app) => {

    //GET to read the db.json file and return all saved notes as JSON
    app.get('/api/notes', (req, res) => {
        // fs.readFile('../db/db.json', {}, (err) => {
        //     if (err) {
        //         console.log(err);
        //     }
        // })
        console.log(db);
        res.json(db);

    });
    
    //POST to receive a new note to save on the request body, add it to the db.json, and then return the new note to the client
    app.post('/api/notes', (req, res) => {
        //Collect information from user, store in variable
        const newNote = {
            title: req.body.title, 
            text: req.body.text,
            id: `${db.length + 1}` //give each note a unique id
        }
        //Pushes new note to json file
        db.push(newNote);
        //Return new note to client
        //console.log(db);
        res.json(db);
    })
    
    //DELETE to receive a query param containing the id of the note to delete
    //Each note will need a unique id
    app.delete('api/notes/:id', (req, res) => {
        //Receives a query param containing the id of the note to delete
        const deleteNote = req.params.id;
        //Finds id of note entry
        const foundNote = db.find(
            (entryID) => foundNote(entryID).id === deleteNote
        );
        //If note id does not exist
        res.json(foundNote ? foundNote : { error: `Note ${deleteNote} was not found.`});

        //Deletes note if it exists
        db.splice(foundNote, 1);

        return res.json({
            message: 'Note has been deleted'
        })


    })

};



