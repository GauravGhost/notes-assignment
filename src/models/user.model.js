const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

const { JWT_SECRET } = require('../config/server.config');

const userSchema = new mongoose.Schema({
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
    password: {
        type: String,
        required: true
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

userSchema.pre('save', function (next) {
    const user = this
    const SALT = bcrypt.genSaltSync(9);
    const hashPassword = bcrypt.hashSync(user.password, SALT);
    user.password = hashPassword;
    next();
})

userSchema.methods.comparePassword = function compare(password) {
    return bcrypt.compareSync(password, this.password);
}

userSchema.methods.genJWT = function generate() {
    const token = jwt.sign({ id: this._id, username: this.username}, JWT_SECRET, {
        expiresIn: '1h'
    })
    return token;
}

const User = mongoose.model('User', userSchema);

module.exports = User;