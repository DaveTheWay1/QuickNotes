const Note = require('../../models/note')

module.exports = {
    index,
    create
}

async function index(req, res) {
    const notes = await Note.find({})
    res.json(notes);
}

async function create(req, res) {
    try {
        // Create a new note using the data from the request body
        const note = await Note.create(req.body);
        res.json(note); // Return the created note as JSON response
    } catch (err) {
        res.status(400).json(err); // Handle any errors
    }
}