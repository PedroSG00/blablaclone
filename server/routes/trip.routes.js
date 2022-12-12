const router = require("express").Router()
const { isAuthenticated } = require("./../middleware/jwt-middleware")
const { tripList, myTrips, tripDetails, createTrips, joinTrip, leaveTrip, editTrip, deleteTrip, searchTrip } = require('../controllers/trip.controller')

router.get("/list", tripList)

router.get("/mytrips", isAuthenticated, myTrips)

router.get("/:id", tripDetails)

router.post("/create", isAuthenticated, createTrips)

router.post("/:tripID/join", isAuthenticated, joinTrip)

router.post("/:tripID/leave", isAuthenticated, leaveTrip)

router.put("/:id/edit", isAuthenticated, editTrip)

router.delete("/:id/delete", isAuthenticated, deleteTrip)

router.get('/trip/search', searchTrip)

module.exports = router

