const router = require("express").Router()
const Trip = require('../models/Trip.model')
const { isAuthenticated } = require("./../middleware/jwt-middleware")

router.get("/list", (req, res, next) => {

    Trip
        .find()
        .populate('owner')
        .select({ origin_address: 1, destination_address: 1, price: 1, date: 1, stops: 1, owner: 1, passengers: 1, seats: 1 })
        .then(foundTrip => res.json(foundTrip))
        .catch(err => next(err))
})

router.get("/mytrips", isAuthenticated, (req, res, next) => {

    Trip
        .find({ owner: req.payload._id })
        .populate('owner')
        .select({ origin_address: 1, destination_address: 1, price: 1, date: 1, stops: 1, owner: 1, seats: 1, passengers: 1 })
        .then(ownTripList => res.json(ownTripList))
        .catch(err => next(err))
})

router.get("/:id", (req, res, next) => {

    const { id } = req.params

    Trip
        .findById(id)
        .populate('owner')
        .populate('passengers')
        .then(trip => res.json(trip))
        .catch(err => next(err))
})

router.post("/create", isAuthenticated, (req, res, next) => {

    const { from, to, origin_address, destination_address, date, seats } = req.body
    const { _id: owner } = req.payload

    const { lng: origin_lng, lat: origin_lat } = from
    const { lng: destination_lng, lat: destination_lat } = to

    Trip
        .create({
            from: {
                type: 'Point',
                coordinates: [origin_lng, origin_lat]
            },
            to: {
                type: 'Point',
                coordinates: [destination_lng, destination_lat]
            },
            origin_address,
            destination_address,
            seats,
            date,
            owner,
            seats
        })
        .then(response => res.json(response))
        .catch(err => next(err))

})

router.post("/:tripID/join", isAuthenticated, (req, res, next) => {

    const { tripID } = req.params

    const { _id: passenger } = req.payload

    Trip
        .findByIdAndUpdate(tripID, { $addToSet: { passengers: passenger } })
        .then(trip => res.status(200).json(trip))
        .catch(err => next(err))

})

router.post("/:tripID/leave", isAuthenticated, (req, res, next) => {

    const { tripID } = req.params

    const { _id: passenger } = req.payload

    Trip
        .findByIdAndUpdate(tripID, { $pull: { passengers: passenger } })
        .then(trip => res.status(202).json(trip))
        .catch(err => next(err))

})

router.put("/:id/edit", (req, res, next) => {

    const { id } = req.params

    Trip
        .findByIdAndUpdate(id, req.body, { new: true })
        .then(data => res.status(200).json(data))
        .catch(err => next(err))
})

router.delete("/:id/delete", (req, res, next) => {

    const { id } = req.params

    Trip
        .findByIdAndDelete(id)
        .then(data => res.status(200).json(data))
        .catch(err => next(err))

})

router.get('/trip/search', (req, res, next) => {
    Trip
        .find({
            $near: {
                $maxDistance: 20000,
                $geometry: {
                    type: "Point",
                    coordinates: [lng, lat]
                }
            }
        })
        .then(filtered => {
            console.log(filtered)
            res.json(filtered)
        })
        .catch(err => next(err))
})

module.exports = router

