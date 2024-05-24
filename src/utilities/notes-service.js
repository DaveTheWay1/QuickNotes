import * as notesAPI from './notes-api';

export async function createNote(noteData) {
    const note = await notesAPI.createNote(noteData)
    localStorage.setItem('note', JSON.stringify(note));
    return note;
}