const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    content: {
        type: String,
        required: true
    },

    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    sharedWith: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
},
    {
        timestamps: true
    }
)

NoteSchema.index({
    title: 'text',
    content: 'text'
});

const Note = mongoose.model('Note', NoteSchema);

module.exports = Note;