import './NoteForm.css'
import { useState } from 'react';
import { createNote } from '../../utilities/notes-service';
export default function NoteForm({user, setUserNotes}){
    const [newNote, setNewNote] = useState({ text: '', user: user._id });

    function handleChange(e) {
        e.preventDefault();
        setNewNote({ ...newNote, [e.target.name]: e.target.value });
        console.log(newNote)
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const note = await createNote(newNote);
        setUserNotes(prevNotes => [...prevNotes, note]);
        setNewNote({ text: '', user: user._id });
    }

    return(
        <div className="Note" >
            <form onSubmit={handleSubmit}>
                <input type="hidden" name='user' value={user._id} />
                <textarea onChange={handleChange} name="text" cols="50" rows="10"></textarea>
                <br />
                <button>Add Note</button>
            </form>
        </div>
    )
}