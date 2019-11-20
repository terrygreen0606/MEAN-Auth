const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
// const nodemailer = require('nodemailer')
const nodeoutlook = require('nodejs-nodemailer-outlook')
const auth = require('../../middleware/authMiddle')

// Import User Model
const User = require('../../models/authModel/userModel')

// POST      /users/signup      This url comes from server.js Use Routes so it's of no need to insert this url again in the router.get('')
// Get      Register a user
// @access  Public
router.post('/signup', (req, res) => {

    const { first_name, last_name, username, email, password } = req.body
    const resetPasswordToken = ''
    const resetPasswordExpires = ''
    console.log(resetPasswordToken)

    // Simple Validation
    if ( !first_name || !last_name || !username || !email || !password ) {
        return res.status(400).json({ msg: 'Please enter all fields.' })
    }

    // Check for existing user
    User.findOne({ email })
        .then( user => {

            if (user) {
                return res.status(400).json({ msg: 'That email already exists.' })
            }

            const newUser = new User({
                first_name, last_name, username, email, password, resetPasswordToken, resetPasswordExpires
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

// GET      /users/login                              This url comes from server.js Use Routes so it's of no need to insert this url again in the router.get('')
// Get      Auth user when login
// @access  Public
router.post('/login', (req, res) => {

    const { email, password } = req.body

    // Simple Validation
    if ( !email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields.' })
    }

    // Check for existing user
    User.findOne({ email })
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

// GET      /users      This url comes from server.js Use Routes so it's of no need to insert this url again in the router.get('')
// Get      Get user data
// @access  Private
router.get('/', auth, (req, res) => {
    
    User.findById( req.user.id )
        .select('-password')
        .then( user => res.json(user) )
})

// POST /users/forgotpassword
// Forgot password function like getting token and sending email

router.post('/forgotpassword', (req, res, next) => {
    const {email} = req.body

    if ( email === '') return res.json('Email required')

    User.findOne({email})
        .then( user => {
            if ( !user ) {
                return res.json({status: 400, message: 'That email does not exist.'})
            } else {
                const token = crypto.randomBytes(20).toString('hex')
                console.log(token, user._id)
                
                user.resetPasswordToken = token
                user.resetPasswordExpires = Date.now() + 360000
                user.save()

                nodeoutlook.sendEmail({
                    auth: {
                        user: "terrygreen1992@outlook.com",
                        pass: "dnfldml godqhr123"
                    },
                    from: 'terrygreen1992@outlook.com',
                    to: `${user.email}`,
                    subject: 'Reset Password',
                    text: `To reset password, click the link: http://localhost:3000/reset/${token}`,
                    onError: (err) => {
                        console.log('There was an error while sending email.', err)
                        res.status(400).json('There caused an error while sending email. Perhaps your email address went wrong.')
                    },
                    onSuccess: (response) => {
                        console.log('This is the response.', response)
                        res.json({status: 200, message:'Recovery Email sent. This email is valid for only an hour. If you can not see the email in your inbox, take a look at Junk email box and click the link there to reset your password.'})
                    }
                })

                // Nodemailer Part
                // **********************
                // const transporter = nodemailer.createTransport({
                //     service: 'outlook',
                //     auth: {
                //         user: 'terrygreen0606@outlook.com',
                //         pass: 'dnfldml godqhr123'
                //     }
                // })

                // const mailOptions = {
                //     from: 'test@gmail.com',
                //     to: `${user.email}`,
                //     subject: 'Reset Password',
                //     text: `To reset password, click the link: http://localhost:5000/reset/${token}`
                // }

                // transporter.sendMail(mailOptions, function( err, response ) {
                //     if (err) {
                //         console.log('There was an error while sending email.', err)
                //     } else {
                        // console.log('This is the response.', response)
                        // res.status(200).json('Recovery Email sent.')
                //     }
                // })

                // Node Outlook Mailer Part
                // ************************
                // var nodeoutlook = require('nodejs-nodemailer-outlook')
                // nodeoutlook.sendEmail({
                //     auth: {
                //         user: "sender@outlook.com",
                //         pass: "********"
                //     },
                //     from: 'sender@outlook.com',
                //     to: 'receiver@gmail.com',
                //     subject: 'Hey you, awesome!',
                //     html: '<b>This is bold text</b>',
                //     text: 'This is text version!',
                //     replyTo: 'receiverXXX@gmail.com',
                //     attachments: [
                //                         {
                //                             filename: 'text1.txt',
                //                             content: 'hello world!'
                //                         },
                //                         {   // binary buffer as an attachment
                //                             filename: 'text2.txt',
                //                             content: new Buffer('hello world!','utf-8')
                //                         },
                //                         {   // file on disk as an attachment
                //                             filename: 'text3.txt',
                //                             path: '/path/to/file.txt' // stream this file
                //                         },
                //                         {   // filename and content type is derived from path
                //                             path: '/path/to/file.txt'
                //                         },
                //                         {   // stream as an attachment
                //                             filename: 'text4.txt',
                //                             content: fs.createReadStream('file.txt')
                //                         },
                //                         {   // define custom content type for the attachment
                //                             filename: 'text.bin',
                //                             content: 'hello world!',
                //                             contentType: 'text/plain'
                //                         },
                //                         {   // use URL as an attachment
                //                             filename: 'license.txt',
                //                             path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'
                //                         },
                //                         {   // encoded string as an attachment
                //                             filename: 'text1.txt',
                //                             content: 'aGVsbG8gd29ybGQh',
                //                             encoding: 'base64'
                //                         },
                //                         {   // data uri as an attachment
                //                             path: 'data:text/plain;base64,aGVsbG8gd29ybGQ='
                //                         },
                //                         {
                //                             // use pregenerated MIME node
                //                             raw: 'Content-Type: text/plain\r\n' +
                //                                 'Content-Disposition: attachment;\r\n' +
                //                                 '\r\n' +
                //                                 'Hello world!'
                //                         }
                //                     ],
                //     onError: (e) => console.log(e),
                //     onSuccess: (i) => console.log(i)
                // })
            }
        })
})


// Get    '/users/reset'
// Reset Password after comparing tokens
router.get('/reset', (req, res, next) => {
    console.log(req.query.token)
    User.findOne({
            resetPasswordToken: req.query.token,
            resetPasswordExpires: {
            $gt: Date.now()
        }
    })
    .then( user => {
        if ( !user ) {
            console.log('Password Reset Link is invalid or has expired.')
            res.status(400).json('Password Reset Link is invalid or has expired.')
        } else {
            res.status(200).send({
                email: user.email,
                message: 'The password reset link is OK.'
            })
        }
    })
})

// Put          /users/updatepassword
// Update Password
router.put('/updatepassword', (req, res, next) => {

    User.findOne({email: req.body.email})
        .then( user => {

            if (user) {

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt
                        .hash( req.body.password, salt, (err, hash) => {
    
                            if (err) throw err
                            
                            user.password = hash
                            user.resetPasswordToken = null
                            user.resetPasswordExpires = null
                            user.save()     
                                .then( () => {
                                    console.log('Password Updated')
                                    res.status(200).json('Password is updated.')
                                })
                        })                    
                })
            } else {
                console.log('That email does not exist in db.')
                res.status(404).json('No user exists in our database to update.')
            }
        })
})

module.exports = router