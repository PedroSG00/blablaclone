const Trip = require('../models/Trip.model')
const User = require('../models/User.model')

const tripList = (req, res, next) => {

    Trip
        .find()
        .populate('owner')
        .select({ origin_address: 1, destination_address: 1, price: 1, date: 1, stops: 1, owner: 1, passengers: 1, seats: 1 })
        .then(foundTrip => res.json(foundTrip))
        .catch(err => next(err))
}

const myTrips = (req, res, next) => {

    Trip
        .find({ owner: req.payload._id })
        .populate('owner')
        .select({ origin_address: 1, destination_address: 1, price: 1, date: 1, stops: 1, owner: 1, seats: 1, passengers: 1 })
        .then(ownTripList => res.json(ownTripList))
        .catch(err => next(err))
}

const tripDetails = (req, res, next) => {

    const { id } = req.params

    Trip
        .findById(id)
        .populate('owner')
        .populate('passengers')
        .then(trip => res.json(trip))
        .catch(err => next(err))
}

const createTrips = (req, res, next) => {

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

}

const joinTrip = (req, res, next) => {

    const { tripID } = req.params

    const { _id: passenger } = req.payload

    Trip
        .findByIdAndUpdate(tripID, { $addToSet: { passengers: passenger } })
        .then(trip => res.status(200).json(trip))
        .catch(err => next(err))

}

const leaveTrip = (req, res, next) => {

    const { tripID } = req.params

    const { _id: passenger } = req.payload

    Trip
        .findByIdAndUpdate(tripID, { $pull: { passengers: passenger } })
        .then(trip => res.status(202).json(trip))
        .catch(err => next(err))

}

const editTrip = (req, res, next) => {

    const { id } = req.params

    Trip
        .findByIdAndUpdate(id, req.body, { new: true })
        .then(data => res.status(200).json(data))
        .catch(err => next(err))
}

const deleteTrip = (req, res, next) => {

    const { id } = req.params

    Trip
        .findByIdAndDelete(id)
        .then(data => res.status(200).json(data))
        .catch(err => next(err))

}

const searchTrip = (req, res, next) => {

    console.log(req.body)

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
}

module.exports = {
    tripList,
    myTrips,
    tripDetails,
    createTrips,
    joinTrip,
    leaveTrip,
    editTrip,
    deleteTrip,
    searchTrip
}