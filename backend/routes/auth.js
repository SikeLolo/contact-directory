const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const User = require('../models/User')

router.post('/login', async (request, response) => {
    const username = request.body.username, password = request.body.password
    try {
        let user = await User.findOne({username: username})
        if(!user){
            return response.status(400).json({ error: "Login with proper credentials"})
        }
        const passwordCompare = await bcrypt.compare(password, user.password)
        if(!passwordCompare){
            return response.status(400).json({ error: "Login with proper credentials"})
        }
        response.status(200).json({ success: "Authenticated"})
    } catch (error) {
        console.error(error)
        response.status(500).send('Server Error')
    }
})

router.post('/register', async (request, response) => {
    const username = request.body.username, password = request.body.password
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        let user = await User.create({
            username: username,
            password: hashedPassword
        }) 
        response.status(200).send(user)
    } catch (error) {
        console.error(error)
        return response.status(500).send('Server Error')
    }
})

module.exports = router;