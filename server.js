const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
// For DEPLOYMENT
const path = require('path')

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

// Serve Static assets if in production for DEPLOYMENT
if (process.env.NODE_ENV === "production") {
    // Set Static folder
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const port = process.env.PORT || 5000

app.listen( port, () => console.log('Server Started on ' + port) )