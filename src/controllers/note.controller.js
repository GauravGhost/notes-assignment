const { StatusCodes } = require('http-status-codes');
const NoteService = require('../services/note.service');
const { catchAsync } = require('../utils/catchAsync');
const { successResponse } = require('../utils/successResponse');
const noteService = new NoteService();

const getNoteById = catchAsync(async (req, res) => {
    const note = await noteService.getNoteById(req.params.id)
    successResponse.data = note;
    return res.status(StatusCodes.OK).json(successResponse);
})

const createNote = catchAsync(async (req, res) => {
    const note = await noteService.createNote(req.body);
    successResponse.data = note;
    return res.status(StatusCodes.CREATED).json(successResponse);
})

const deleteNote = catchAsync(async (req, res) => {
    const note = await noteService.deleteNoteById(req.params.id)
    successResponse.data = note;
    return res.status(StatusCodes.OK).json(successResponse);
})

const updateNote = catchAsync(async (req, res) => {
    const note = await noteService.updateNoteById(req.params.id, req.body)
    successResponse.data = note;
    return res.status(StatusCodes.OK).json(successResponse);
})

const shareNoteById = catchAsync(async (req, res) => {
    const note = await noteService.shareNoteById(req.params.id)
    successResponse.data = note;
    return res.status(StatusCodes.OK).json(successResponse);
})

const shareNoteByUserId = catchAsync( async (req, res) => {
    const note = await noteService.shareNoteToUserId(req.params.id, req.params.userId)
    successResponse.data = note;
    return res.status(StatusCodes.OK).json(successResponse);
})

module.exports = {
    getNoteById,
    createNote,
    deleteNote,
    updateNote,
    shareNoteById,
    shareNoteByUserId
}