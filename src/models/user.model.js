const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    
    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        unique: true,
    },
    
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
        required: true
    }

},
    {
        timestamps: true
    }
)

const User = mongoose.model('User', UserSchema);

module.exports = User;