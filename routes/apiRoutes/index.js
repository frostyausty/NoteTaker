const router = require('express').Router();
const notes  = require('../../db/db.json');
const createNewNote = require('../../lib/notes');
const { nanoid } = require('nanoid');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    req.body.id = nanoid(3);

    const note = createNewNote(req.body, notes)
    
    console.log('A new note was created');

    res.json(note);
});



module.exports = router;