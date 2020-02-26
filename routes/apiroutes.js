const router = require("express").Router();
const notestorage = require("../db/notestorage");

// GET "/api/notes" responds with all notes from the database
router.get("/notestorage", function(req, res) {
	notestorage
    .getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
});

router.post("/notestorage", (req, res) => {
	notestorage
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch(err => res.status(500).json(err));
});

// DELETE "/api/notes" deletes the note with an id equal to req.params.id
router.delete("/notestorage/:id", function(req, res) {
	notestorage
    .removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch(err => res.status(500).json(err));
});

module.exports = router;