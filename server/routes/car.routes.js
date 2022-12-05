const router = require("express").Router()
const Car = require("../models/Car.model")
const User = require("../models/User.model")
const { isAuthenticated } = require("./../middleware/jwt-middleware")


router.get("/list", (req, res, next) => {

    Car
        .find()
        .then(cars => res.json(cars))
        .catch(err => next(err))

})

router.get("/", (req, res, next) => {

    const { make, model, year } = req.query

    let query = {}

    if (make) query.make = make
    if (model) query.model = model
    if (year) query.year = year

    console.log(query)

    Car
        .find(query)
        .then(cars => res.json(cars))
        .catch(err => next(err))

})


router.post("/create", isAuthenticated, (req, res, next) => {

    const { make, model, year, color, seats, energeticClassification } = req.body

    const { _id: user_id } = req.payload

    Car
        .create({ make, model, year, color, seats, energeticClassification })
        .then((newCar) => {
            return User.findByIdAndUpdate(user_id, { $addToSet: { cars: newCar._id } }, { new: true })
        })
        .then(userCar => res.json(userCar))
        .catch(err => next(err))

})

router.post('/:car_id/edit', isAuthenticated, (req, res, next) => {

    const { car_id } = req.params
    const { _id: user_id } = req.payload
    const { make, model, year, color, seats, energeticClassification } = req.body

    Car
        .findByIdAndUpdate(car_id, { make, model, year, color, seats, energeticClassification })
        .then((updatedCar) => {
            return User.findByIdAndUpdate(user_id, { cars: updatedCar._id })
        })
        .then(updatedUser => res.json(updatedUser))
        .catch(err => next(err))

})


router.post('/:car_id/delete', isAuthenticated, (req, res, next) => {

    const { car_id } = req.params
    const { _id: user_id } = req.payload


    Car
        .findByIdAndDelete(car_id)
        .then(deletedCar => {
            return User.findByIdAndUpdate(user_id, { $pull: { cars: deletedCar._id } }, { new: true })
        })
        .then(updatedUser => res.json(updatedUser))
        .catch(err => next(err))

})




module.exports = router
