const router = require("express").Router()

const bcrypt = require('bcryptjs')
const User = require("../models/User.model")
const saltRounds = 10

const jwt = require('jsonwebtoken')

const { isAuthenticated } = require('../middleware/jwt-middleware')



router.post('/sign-up', (req, res, next) => {

    const { email, password, username, firstname, lastname, age, gender, imageUrl, cars, friends } = req.body

    User
        .create({ email, password, username, firstname, lastname, age, gender, imageUrl, cars, friends })
        .then((createdUser) => {

            const { email, username, firstname, lastname, age, gender, imageUrl, cars, friends } = createdUser
            const user = { email, username, firstname, lastname, age, gender, imageUrl, cars, friends }

            res.status(201).json({ user })
        })
        .catch(err => next(err))
})



router.post('/log-in', (req, res, next) => {

    const { email, password } = req.body

    if (email === '' || password === '') {
        res.status(400).json({ errorMessages: ['Provide email and password'] })
        return
    }

    User
        .findOne({ email })
        .then(foundUser => {
            console.log(foundUser)
            if (!foundUser || foundUser.validatePassword(password)) {
                res.status(200).json({ authToken: foundUser.signToken() })
            }
            else {
                res.status(401).json({ errorMessages: ['Unable to autenticate user'] })
            }
        })
        .catch(err => next(err))
})


router.get('/verify', isAuthenticated, (req, res, next) => {
    res.status(200).json(req.payload)
})

module.exports = router