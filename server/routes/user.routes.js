const router = require("express").Router()
const User = require("../models/User.model")

const jwt = require('jsonwebtoken')

const { isAuthenticated } = require('../middleware/jwt-middleware')


router.get('/list', isAuthenticated, (req, res, next) => {

    User
        .find({ role: 'USER' })
        .select({ email: 1, imageUrl: 1 })
        .then(users => res.json(users))
        .catch(error => next(error))

});

router.get('/:user_id', isAuthenticated, (req, res, next) => {

    const { user_id } = req.params

    User
        .findById(user_id)
        .populate('comments')
        .then(userDetails => res.json(userDetails))
        .catch(error => next(error))

})


router.post('/:user_id/edit', isAuthenticated, (req, res, next) => {

    const { user_id } = req.params
    const { email, username, _id, firstname, lastname, age, gender, imageUrl } = req.body

    User
        .findByIdAndUpdate(user_id, { email, username, _id, firstname, lastname, age, gender, imageUrl }, { new: true })
        .then(userDetails => res.json(userDetails))
        .catch(error => next(error))

})


router.post("/:user_id/delete", isAuthenticated, (req, res, next) => {

    const { user_id } = req.params

    User
        .findByIdAndDelete(user_id)
        .then(deletedUser => res.json(deletedUser))
        .catch(err => next(err))

})

module.exports = router