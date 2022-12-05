const router = require("express").Router()
const Trip = require('../models/Trip.model')
const { isAuthenticated } = require("./../middleware/jwt-middleware")

router.get("/list", (req, res, next) => {

    Trip
        .find()
        .select({ origin_address: 1, destination_address: 1, price: 1, date: 1, stops: 1 })
        .then(res => res.json())
        .catch(err => next(err))
})

router.get("/:id", (req, res, next) => {

    const { id } = req.params

    Trip
        .findById(id)
        .then(res => res.json())
        .catch(err => next(err))
})

router.post("/create", isAuthenticated, (req, res, next) => {

    const { from_lat, from_lng, to_lat, to_lng, origin_address, destination_address, date } = req.body
    const { _id: owner } = req.payload

    Trip
        .create({
            from: {
                type: 'Point',
                coordinates: [from_lng, from_lat]
            },
            to: {
                type: 'Point',
                coordinates: [to_lng, to_lat]
            },
            origin_address,
            destination_address,
            date,
            owner
        })

})

router.post("/:tripID/join", (req, res, next) => {

    const { tripID } = req.body

    const { _id: participant } = req.payload

    Trip
        .findByIdAndUpdate(tripID, { $addToSet: { participants: participant } }, { new: true })
        .then(editTrip => res.json(editTrip))
        .catch(err => next(err))

    console.log(req.payload)

})

router.post("/:id/edit", (req, res, next) => {

    const { id } = req.params

    Trip
        .findByIdAndUpdate(id, req.body)
        .then(res => res.json())
        .catch(err => next(err))
})

router.post(":/id/delete", (req, res, next) => {

    const { id } = req.params

    Trip
        .findByIdAndDelete(id)
        .then(res => res.json())
        .catch(err => next(err))

})

module.exports = router

