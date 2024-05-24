import sendRequest from "./send-request";
const BASE_URL = '/api/notes';

export async function createNote(noteData) {
    return sendRequest(`${BASE_URL}/create`, 'POST', noteData);
}

export async function getAll() {
    return sendRequest(BASE_URL);
}

export async function getById(id){
    return sendRequest(`${BASE_URL}/${id}`)
}