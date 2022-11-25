const express = require('express')
const router = express.Router()
var fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Note');
const { body, validationResult } = require('express-validator');


//Route 1: Get all the Notes using GET "/api/auth/getuser". Login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id })
        res.json(notes)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");


    }

})
//Route 2: Add a new note using POST "/api/auth/addnote". Login required
router.post('/addnote', fetchuser, [

    body('title', 'Enter a valid Title').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 })], async (req, res) => {
        try {
            const { title, description, tag, } = req.body;
            //If there are errors, return BAd request and the errors
            errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const note = new Note({
                title, description, tag, user: req.user.id
            })
            const saveNote = await note.save();

            res.json(saveNote)
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Some error occured");
        }
    })


module.exports = router