const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const BlogSchema = new Schema({
      title: {
          type: String,
          required: true
      },
      content: {
          type: String,
          required: true
      },
      username: {
          type: String,
          required: true
      },
      likes: {
          type: Array,
          default: []
      },
      dislikes: {
          type: Array,
          default: []
      },
      image: {
          type: String,
          default: ''
      },
      register_date: {
          type: Date,
          default: Date.now
      }
})

module.exports = Blogs = mongoose.model('blogs', BlogSchema)