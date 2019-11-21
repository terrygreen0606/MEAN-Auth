const express = require('express')
const router = express.Router()
const auth = require('../../middleware/authMiddle')

// Import Post Model
const Post = require('../../models/blogModel')

// GET      /api/blogs       This url comes from server.js Use Routes so it's of no need to insert this url again in the router.get('')
// Get      all blogs
// @access  Public
router.get('/', (req, res) => {

    Post.find()
        .sort({ date: -1 })                             // Descending order
        .then(posts => res.json(posts))
})

// POST         /api/blogs       This url comes from server.js Use Routes so it's of no need to insert this url again in the router.get('')
// Create       a post
// @access      Private

// router.post('/', auth, (req, res) => {
router.post('/', (req, res) => {

    const { title, content, username } = req.body

    if ( !title || !content || !username ) {
        return res.status(400).json({ msg: 'Please enter all fields.' })
    }

    Post.findOne({ title: title})
        .then( post => {

            if (post) return res.status(400).json({ msg: 'The post with that title already exists.'})

            const newPost = new Post({
                title, content, username
            })

            newPost.save().then( post => res.json(post) )
        })
})

// DELETE       /api/blogs/:id       This url comes from server.js Use Routes so it's of no need to insert this url again in the router.get('')
// Delete       a blog
// @access      Private
// router.delete('/:id', auth, (req, res) => {
router.delete('/:id', (req, res) => {

    Post.findById(req.params.id)                                                    //Get Parameter in the url
        .then( post => post.remove().then( () => res.json({ success: true }) ))
        .catch( err => res.status(404).json( {success: false} ) )
})


module.exports = router