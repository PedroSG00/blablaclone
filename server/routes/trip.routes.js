const router = require("express").Router()
const Trip = require("./../models/Trip.model")

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

router.post("/create", (req, res, next) => {

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
