const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },

    permission: [
        {
            type: String
        }
    ]
},
    {
        timestamps: true
    }
)

const Role = mongoose.model('Role', RoleSchema);

module.exports = Role;