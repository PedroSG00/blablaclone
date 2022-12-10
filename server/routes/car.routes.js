const router = require("express").Router()
const User = require("../models/User.model")
const { getCars, carsQuery, createCar, editCar, deleteCar } = require('../controllers/car.controller')
const { isAuthenticated } = require("./../middleware/jwt-middleware")


router.get("/list", getCars)

router.get("/", carsQuery)

router.post("/create", isAuthenticated, createCar)


router.post('/:car_id/edit', isAuthenticated, editCar)


router.post('/:car_id/delete', isAuthenticated, deleteCar)


module.exports = router
