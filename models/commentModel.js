const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const CommentSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    body: {
        type: String,
        required: true
    },

    postId: {
        type: String,
        required: true
    },
    
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Comments = mongoose.model('comments', CommentSchema)