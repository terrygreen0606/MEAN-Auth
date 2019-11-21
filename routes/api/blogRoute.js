const express = require('express')
const router = express.Router()
const auth = require('../../middleware/authMiddle')

// Import Blog Model
const Blog = require('../../models/blogModel')

// GET      /api/blogs       This url comes from server.js Use Routes so it's of no need to insert this url again in the router.get('')
// Get      all blogs
// @access  Public
router.get('/', (req, res) => {

    Blog.find()
        .sort({ date: -1 })                             // Descending order
        .then(blogs => res.json(blogs))
})

// POST         /api/blogs       This url comes from server.js Use Routes so it's of no need to insert this url again in the router.get('')
// Create       a blog
// @access      Private

// router.post('/', auth, (req, res) => {
router.post('/', (req, res) => {

    const { title, content, username } = req.body

    if ( !title || !content || !username ) {
        return res.status(400).json({ msg: 'Please enter all fields.' })
    }

    Blog.findOne({ title: title})
        .then( blog => {

            if (blog) return res.status(400).json({ msg: 'The blog with that title already exists.'})

            const newBlog = new Blog({
                title, content, username
            })

            newBlog.save().then( blog => res.json(blog) )
        })
})

// DELETE       /api/blogs/:id       This url comes from server.js Use Routes so it's of no need to insert this url again in the router.get('')
// Delete       a blog
// @access      Private
// router.delete('/:id', auth, (req, res) => {
router.delete('/:id', (req, res) => {

    Blog.findById(req.params.id)                                                    //Get Parameter in the url
        .then( blog => blog.remove().then( () => res.json({ success: true }) ))
        .catch( err => res.status(404).json( {success: false} ) )
})


module.exports = router