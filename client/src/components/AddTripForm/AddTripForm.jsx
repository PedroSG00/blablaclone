import "./AddTripForm.css"
import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import Loader from "../Loader/Loader"
import { useLoadScript } from "@react-google-maps/api"
import PlacesAutocomplete from "../Autocomplete/Autocomplete"
import tripService from "../../services/trip.service"
import routeService from "../../services/route.service"


const AddTripForm = ({ handleMarkers }) => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "AIzaSyASZVf7r6NNQIoy45ymdwSGtZhSUIqNiI8",
        libraries: ["places"]
    })

    const [newTripData, setNewTripData] = useState({

        from: {},
        to: {},
        origin_address: '',
        destination_address: '',
        date: '',
        seats: 0

    })

    const { date, seats } = newTripData


    const handleInput = e => {

        const { name, value } = e.target
        setNewTripData({ ...newTripData, [name]: value })
    }

    const updateAddress = (kind, value, { lat, lng }) => {

        if (kind === "origin_address") {
            setNewTripData({ ...newTripData, origin_address: value, from: { lat, lng } })
        } else {
            setNewTripData({ ...newTripData, destination_address: value, to: { lat, lng } })
        }
    }

    const handleForm = e => {

        e.preventDefault()
        tripService
            .createTrip(newTripData)
            .then(({ data }) => console.log(data))
    }

    return (

        isLoaded ?
            <Form className="form-wrapper" onSubmit={handleForm}>
                <Form.Group className="mb-3">
                    <Form.Label>Origin</Form.Label>
                    <PlacesAutocomplete placeholder={"Where is your departure at?"} kind={"origin_address"} updateAddress={updateAddress} handleMarkers={handleMarkers} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Destination</Form.Label>
                    <PlacesAutocomplete placeholder={"Where is your destination at?"} kind={"destination_address"} name="destination_address" updateAddress={updateAddress} handleMarkers={handleMarkers} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" name="date" value={date} onChange={handleInput} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Number of available seats</Form.Label>
                    <Form.Control type="number" name="seats" value={seats} onChange={handleInput} />
                </Form.Group>

                <div className="d-grid">
                    <Button type="submit">Add Trip</Button>
                </div>
            </Form>
            : <Loader />

    )
}

export default AddTripForm