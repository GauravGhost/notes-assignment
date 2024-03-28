const { StatusCodes } = require('http-status-codes');
const NoteRepository = require('../repositories/note.repository');
const { ApiError } = require('../utils/base.error');

const noteRepository = new NoteRepository();

class NoteService {
    async getNoteById(id) {
        const note = await noteRepository.get(id)
        if(!note){
            throw new ApiError(StatusCodes.NOT_FOUND, "Note Not Found")
        }
        return note;
    }

    async createNote(data) {
        const note = await noteRepository.create(data)
        return note;
    }

    async deleteNoteById(id) {
        const note = await noteRepository.destroy(id);
        return note;
    }

    async updateNoteById(id, data) {
        const note = await noteRepository.update(id, data);
        return note;
    }

    async shareNoteById(id) {
        const note = await noteRepository.update(id, {sharable: true});
        return note;
    }

    async shareNoteToUserId(id, userId) {
        const note = await noteRepository.get(id);
        note.sharedWith.push(userId);
        note.save();
        return note;
    }
}

module.exports = NoteService;