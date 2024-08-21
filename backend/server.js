const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const auth = require('./routes/auth')

mongoose.connect('mongodb://127.0.0.1/contactDirectory').then(() => {
    console.log('Connected to MongoDB')
}).catch((error) => {
    console.error('Error connecting to the server', error)
})

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
dotenv.config()

app.use('/api/auth', auth);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`)
})