const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const auth = require('../../middleware/authMiddle')

// Import User Model
const User = require('../../models/authModel/userModel')

// GET      /api/auth      This url comes from server.js Use Routes so it's of no need to insert this url again in the router.get('')
// Get      Auth user
// @access  Public
router.post('/', (req, res) => {

    const { email, password } = req.body

    // Simple Validation
    if ( !email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields.' })
    }

    // Check for existing user
    User.findOne({ email: email })
        .then( user => {

            if (!user) {
                return res.status(400).json({ msg: 'User does not exist.' })
            }

            // Validate Password
            bcrypt.compare(password, user.password)
                .then( isMatch => {
                    if (!isMatch) return res.status(400).json({ msg: 'Invalid Password' })

                    jwt.sign(
                        { id: user._id },
                        config.get('jwtSecret'),
                        { expiresIn: 3600 },
                        (err, token) => {
                            if (err) throw err
                            res.json({
                                token,
                                user: {
                                    id: user._id,
                                    username: user.username,
                                    email: user.email
                                }
                            })
                        }
                    )
                })
        })
})

// GET      /api/auth/user      This url comes from server.js Use Routes so it's of no need to insert this url again in the router.get('')
// Get      Get user data
// @access  Private
router.get('/user', auth, (req, res) => {
    
    User.findById( req.user.id )
        .select('-password')
        .then( user => res.json(user) )
})

module.exports = router