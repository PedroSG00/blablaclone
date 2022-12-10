const router = require("express").Router()
const Car = require('../models/Car.model')
const User = require('../models/User.model')

const getCars = (req, res, next) => {
    Car
        .find()
        .then(cars => res.json(cars))
        .catch(err => next(err))
}

const carsQuery = (req, res, next) => {

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

}

const createCar = (req, res, next) => {

    const { make, model, year, color, seats, energeticClassification } = req.body

    const { _id: user_id } = req.payload

    Car
        .create({ make, model, year, color, seats, energeticClassification })
        .then((newCar) => {
            return User.findByIdAndUpdate(user_id, { $addToSet: { cars: newCar._id } }, { new: true })
        })
        .then(userCar => res.json(userCar))
        .catch(err => next(err))

}

const editCar = (req, res, next) => {

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

}

const deleteCar = (req, res, next) => {

    const { car_id } = req.params
    const { _id: user_id } = req.payload


    Car
        .findByIdAndDelete(car_id)
        .then(deletedCar => {
            return User.findByIdAndUpdate(user_id, { $pull: { cars: deletedCar._id } }, { new: true })
        })
        .then(updatedUser => res.json(updatedUser))
        .catch(err => next(err))

}

module.exports = {
    getCars,
    carsQuery,
    createCar,
    editCar,
    deleteCar
}