const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')

// Import User Model
const User = require('../../models/authModel/userModel')

// GET      /api/users      This url comes from server.js Use Routes so it's of no need to insert this url again in the router.get('')
// Get      Register a user
// @access  Public
router.post('/', (req, res) => {

    const { username, email, password } = req.body

    // Simple Validation
    if ( !username || !email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields.' })
    }

    // Check for existing user
    User.findOne({ email: email })
        .then( user => {

            if (user) {
                return res.status(400).json({ msg: 'That email already exists.' })
            }

            const newUser = new User({
                username, email, password
            })

            // Hash -- Create salt
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash( newUser.password, salt, (err, hash) => {

                    if (err) throw err

                    newUser.password = hash

                    newUser.save()
                        .then( user => {

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
        })
})

module.exports = router