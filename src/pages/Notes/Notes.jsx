import { useState, useEffect } from 'react';
import * as NotesAPI from '../../utilities/notes-api';
import NoteForm from '../NoteForm/NoteForm';
import NoteDetail from '../NoteDetail';

export default function Notes({user}){
    const [userNotes, setUserNotes] = useState([])

    useEffect(() => {
        async function fetchAndSetNotes() {
            try {
                const notes = await NotesAPI.getAll();
                setUserNotes(notes); 
            } catch (error) {
                console.error('Error fetching notes:', error);
            }
        }
        fetchAndSetNotes();
    }, []);
    return(
        <>
        <NoteForm user={user} setUserNotes={setUserNotes}/>
        <h1>Notes</h1>
        {
            userNotes.length > 0 ?
            userNotes.map(note => (
                <NoteDetail key={note._id} note={note} />
            )) :
            <p>No Notes Yet</p>
        }
        </>
    )
}