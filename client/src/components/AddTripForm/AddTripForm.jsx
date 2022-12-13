import "./AddTripForm.css"
import { useState, useContext, useEffect } from "react"
import { Form, Button, ModalTitle } from "react-bootstrap"
import Loader from "../Loader/Loader"
import PlacesAutocomplete from "../Autocomplete/Autocomplete"
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import tripService from "../../services/trip.service"
import { MessageContext } from "../../context/userMessage.context"
import { useNavigate } from "react-router-dom"
import { MapContext } from "../../context/map.context"
import userService from "../../services/user.service"
import { Modal } from "react-bootstrap"
import Slider from "@mui/material/Slider"


const AddTripForm = ({ handleMarkers, setTripPrice, tripPrice }) => {

    const [showModal, setShowModal] = useState(false)
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
        price: 0,
        car: ''
    })
    const minSlider = tripPrice * 0.85
    const maxSlider = tripPrice * 1.15

    useEffect(() => {
        if (destination_address !== '' && origin_address !== '' && seats != 0) {
            setShowModal(true)
        }
    }, [newTripData])

    useEffect(() => {
        handleUserDetails()
    }, [])

    const closeModal = () => setShowModal(false)

    const handleUserDetails = () => {
        userService
            .getUserDetails()
            .then(({ data }) => setUserCars(data.cars))
    }

    const { date, seats, origin_address, destination_address } = newTripData


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
            .then(({ data }) => {
                setShowToast(true)
                setToastMessage('Created new trip')
                navigate(`/user/profile`)
            })
            .catch(err => setErrors(err.response.data.errorMessages))
    }

    return (

        isLoaded ?
            <>
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

                    {userCars?.length > 0 && <Form.Select aria-label="Default select example" name='car' onChange={handleInput}>
                        <option>Choose car</option>
                        {userCars.map(elm => <option key={elm._id} value={elm._id} >{elm.make} {elm.model}</option>)}
                    </Form.Select>}

                    <Form.Group className="mb-3">
                        <Form.Label>Number of available seats</Form.Label>
                        <Form.Control type="number" name="seats" value={seats} onChange={handleInput} />
                    </Form.Group>

                    {errors.length ? <ErrorMessage>{errors.map(elm => <p key={elm}>{elm}</p>)}</ErrorMessage> : undefined}

                    <div className="d-grid">
                        <Button type="submit">Add Trip</Button>
                    </div>

                </Form>

                <Modal show={showModal} onHide={closeModal} centered>
                    <Modal.Header className="text-center" closeButton>
                        <Modal.Title>Set the trip price</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Slider
                            aria-label="Price"
                            defaultValue={tripPrice}
                            valueLabelDisplay="EUROS PUTA"
                            step={0.50}

                            min={minSlider}
                            max={maxSlider}
                        >

                        </Slider>
                    </Modal.Body>
                </Modal>
            </>


            : <Loader />

    )
}

export default AddTripForm