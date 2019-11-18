const express = require('express')
const router = express.Router()
const auth = require('../../middleware/authMiddle')

// Import Post Model
const Post = require('../../models/postModel')

// GET      /api/posts       This url comes from server.js Use Routes so it's of no need to insert this url again in the router.get('')
// Get      all posts
// @access  Public
router.get('/', (req, res) => {

    Post.find()
        .sort({ date: -1 })                             // Descending order
        .then(posts => res.json(posts))
})

// POST         /api/posts       This url comes from server.js Use Routes so it's of no need to insert this url again in the router.get('')
// Create       a post
// @access      Private
router.post('/', auth, (req, res) => {

    const newPost = new Post({
        title: req.body.title,
        body: req.body.body
    })

    newPost.save().then( post => res.json(post) )
})

// DELETE       /api/posts/:id       This url comes from server.js Use Routes so it's of no need to insert this url again in the router.get('')
// Delete       a post
// @access      Private
router.delete('/:id', auth, (req, res) => {

    Post.findById(req.params.id)                                                    //Get Parameter in the url
        .then( post => post.remove().then( () => res.json({ success: true }) ))
        .catch( err => res.status(404).json( {success: false} ) )
})


module.exports = router