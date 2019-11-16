const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const PostSchema = new Schema({
      title: {
          type: String,
          required: true
      },
      body: {
          type: String,
          required: true
      },
      date: {
          type: Date,
          default: Date.now
      }
})

module.exports = Posts = mongoose.model('posts', PostSchema)