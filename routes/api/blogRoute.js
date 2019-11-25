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
        .sort({ register_date: -1 })                             // Descending order
        .then(blogs => res.json(blogs))
})

// POST         /api/blogs       This url comes from server.js Use Routes so it's of no need to insert this url again in the router.get('')
// Create       a blog
// @access      Private

router.post('/', auth, (req, res) => {

    const blogData = JSON.parse(req.body.blog)
    const { title, content, username } = blogData[0]

    // Validation
    if ( !title || !content || !username ) {
        return res.status(400).json({ msg: 'Please enter all fields.' })
    }
    if (req.files === null) {
        return res.status(400).json({ msg: 'No file uploaded.'})
    }

    const file = req.files.file
    
    Blog.findOne({ username })
        .then( blog => {

            if (blog) return res.status(400).json({ msg: 'You have already posted your blog.'})

            // Move the uploaded file to
            file.mv(`${__dirname}../../../client/public/uploads/${file.name}`, err => {
                if (err) {
                    console.log(err)
                    return res.status(500).send(err)
                }
            })
            const filePath = `/uploads/${file.name}`
            
            const newBlog = new Blog({
                title, content, username, image: filePath
            })

            newBlog.save().then( blog => res.json(blog) )
        })
})

// Post         /api/blogs/update
// Update       Likes and Dislikes
router.post('/update', auth, (req, res) => {
    const {likes, dislikes, username} = req.body
    Blog.findOne({username})
        .then( blog => {
            blog.likes = likes
            blog.dislikes = dislikes
            blog.save().catch(err=>{res.send(err)})
        })
})

// DELETE       /api/blogs/:id       This url comes from server.js Use Routes so it's of no need to insert this url again in the router.get('')
// Delete       a blog
// @access      Private
router.delete('/:id', auth, (req, res) => {

    Blog.findById(req.params.id)                                                    //Get Parameter in the url
        .then( blog => blog.remove().then( () => res.json({ success: true }) ))
        .catch( err => res.status(404).json( {success: false} ) )
})


module.exports = router