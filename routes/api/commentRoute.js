const express = require('express')
const router = express.Router()

// Import Comment Model
const Comment = require('../../models/commentModel')

// GET      /api/comments       This url comes from server.js Use Routes so it's of no need to insert this url again in the router.get('')
// Get      all comments
// @access  Public
router.get('/', (req, res) => {

    Comment.find()
        .sort({ date: -1 })                             // Descending order
        .then(comments => res.json(comments))
})

// POST         /api/comments       This url comes from server.js Use Routes so it's of no need to insert this url again in the router.get('')
// Create       a comment
// @access      Public
router.post('/', (req, res) => {

    const newComment = new Comment({
        name: req.body.name,
        email: req.body.email,
        body: req.body.body,
        postId: req.body.postId
    })

    newComment.save().then( comment => res.json(comment) )
})

// DELETE       /api/posts/:id       This url comes from server.js Use Routes so it's of no need to insert this url again in the router.get('')
// Delete       a post
// @access      Public
router.delete('/:id', (req, res) => {

    Comment.findById(req.params.id)                                                    //Get Parameter in the url
        .then( comment => comment.remove().then( () => res.json({ success: true }) ))
        .catch( err => res.status(404).json( {success: false} ) )
})

module.exports = router