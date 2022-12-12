import "./AddTripForm.css"
import { useState, useContext, useEffect } from "react"
import { Form, Button } from "react-bootstrap"
import Loader from "../Loader/Loader"
import { useLoadScript } from "@react-google-maps/api"
import PlacesAutocomplete from "../Autocomplete/Autocomplete"
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import tripService from "../../services/trip.service"
import { MessageContext } from "../../context/userMessage.context"
import { useNavigate } from "react-router-dom"
import { MapContext } from "../../context/map.context";
import userService from "../../services/user.service"
import { AuthContext } from "../../context/auth.context"


const AddTripForm = ({ handleMarkers }) => {


    const [userCars, setUserCars] = useState([])

    const { setShowToast, setToastMessage } = useContext(MessageContext)
    const { isLoaded } = useContext(MapContext)
    const navigate = useNavigate()

    const [errors, setErrors] = useState([])

    const [newTripData, setNewTripData] = useState({

        from: {},
        to: {},
        origin_address: '',
        destination_address: '',
        date: '',
        seats: 0,
        cars: []
    })

    const handleUserDetails = () => {
        userService
            .getUserDetails()
            .then(({ data }) => setUserCars(data.cars))

    }

    const { date, seats } = newTripData


    const handleInput = e => {

        const { name, value } = e.target
        console.log(e.target.value)
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
            .then(({ data }) => {
                setShowToast(true)
                setToastMessage('Created new trip')
                navigate(`/user/profile`)
            })
            .catch(err => setErrors(err.response.data.errorMessages))
    }


    useEffect(() => {
        handleUserDetails()
    }, [])

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

                {userCars?.length > 0 && <Form.Select aria-label="Default select example" name='cars' onChange={handleInput}>
                    <option>Choose car</option>
                    {userCars.map(elm => {
                        const selectedCarCopy = { ...elm }
                        return (
                            <option key={elm._id} value={elm} >{elm.make} {elm.model}</option>)
                    })}
                </Form.Select>}

                <Form.Group className="mb-3">
                    <Form.Label>Number of available seats</Form.Label>
                    <Form.Control type="number" name="seats" value={seats} onChange={handleInput} />
                </Form.Group>

                {errors.length ? <ErrorMessage>{errors.map(elm => <p key={elm}>{elm}</p>)}</ErrorMessage> : undefined}

                <div className="d-grid">
                    <Button type="submit">Add Trip</Button>
                </div>

            </Form >
            : <Loader />

    )
}

export default AddTripForm