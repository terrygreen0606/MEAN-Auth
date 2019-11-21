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

    const {content, username, blogId } = req.body

    // Validation
    if ( !content || !username || !blogId ) {
        return res.status(400).json({ msg: 'Please enter all fields.' })
    }

    Comment.find({blogId})
        .then( comment => {

            if ( comment ) {
                for (let i = 0; i < comment.length ; i++) {
                    if ( comment[i].username === username ) {
                        return res.status(400).json({ msg: 'You have already commented on this post.' })
                    }
                }
            }

            const newComment = new Comment({
                content, username, blogId
            })
        
            newComment.save().then( comment => res.json(comment) ).catch(err => console.log(err))
        })
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