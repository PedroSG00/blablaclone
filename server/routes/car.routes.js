const router = require("express").Router()
const mongoose = require("mongoose")
const Car = require("../models/Car.model")
const User = require("../models/User.model")
const { isAuthenticated } = require("./../middleware/jwt-middleware")


router.get("/list", (req, res, next) => {

    Car
        .find()
        .then(cars => res.json(cars))
        .catch(err => next(err))

})



router.post("/create", isAuthenticated, (req, res, next) => {

    const { make, model, year, color, seats, energeticClassification } = req.body

    const { _id: user_id } = req.payload

    Car
        .create({ make, model, year, color, seats, energeticClassification })
        .then((newCar) => {
            return User.findByIdAndUpdate(user_id, { $push: { car: newCar._id } }, { new: true })
        })
        .then(userCar => res.json(userCar))
        .catch(err => next(err))

})

router.post('/delete-car', (req, res, next) => {

    const { user_id, comment_id } = req.params
    console.log(comment_id)

    Comment
        .findByIdAndDelete(comment_id)
        .then(deletedComment => {
            return User.findByIdAndUpdate(user_id, { $pull: { comments: deletedComment._id } }, { new: true })
        })
        .then(updatedUser => res.json(updatedUser))
        .catch(err => next(err))

})




module.exports = router
