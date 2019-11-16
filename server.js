const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

// Bodyparser middleware
app.use(bodyParser.json())

// DB config
const db = require('./config/keys').mongoURI

//Connect to MongoDB
mongoose.connect(db , {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then( () => console.log("MongoDB connected") )
    .catch( err => console.log(err) )

// Import Routes
const posts = require('./routes/api/postRoute')
const comments = require('./routes/api/commentRoute')

// Use Routes
app.use('/api/posts', posts)
app.use('/api/comments', comments)

const port = process.env.PORT || 5000

app.listen( port, () => console.log('Server Started on ' + port) )