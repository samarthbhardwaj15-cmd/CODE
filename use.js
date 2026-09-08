const mongoose = require('mongoose');
const userschema = new mongoose.Schema({ 
    username: {
        type: String,
        required: true,
        unique: true
    }
    email: {
        type: String,
        require: true,
        unique: true,
    }
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: [ 'user', 'artist' ],
        default: 'user',
    }
})
// const userSchema = new mongoose.Schema({
//     username: String,
//     email: String,
//     password: String,
// })

const useModel = mongoose.model('user', userSchema)
module.exports = userModel

