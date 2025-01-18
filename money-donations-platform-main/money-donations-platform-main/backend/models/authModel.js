const mongoose = require('mongoose')

const userSchema= new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    confirmPassword: {type: String, required: true},
    role: { type: String, default: "user"}
}, {timestamps: true})

module.exports= mongoose.model('user', userSchema)