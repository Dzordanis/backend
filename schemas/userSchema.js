const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    images: {
        type: Array,
        required: true,
        default: ['https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg']
    },
    likesGot: {
        type: Array,
        required: true
    },
    likesGiven: {
        type: Array,
        required: true
    },
    filterCity: {
        type: String,
        required: true,
        default: 'Vilnius'
    },
    filterGender: {
        type: String,
        required: true,
        default: 'male'
    },
    filterAgeMax: {
        type: Number,
        required: true,
        default: 50
    }
})

module.exports = {
    userSchema: mongoose.model('userSchema16', userSchema)
}