import "./AddTripForm.css"
import { useState, useContext } from "react"
import { Form, Button } from "react-bootstrap"
import authService from "../../services/auth.service"
import uploadServices from "../../services/upload.service"
import { useNavigate } from 'react-router-dom'
import { MessageContext } from '../../context/userMessage.context'
import Loader from "../Loader/Loader"
import { useLoadScript } from "@react-google-maps/api"
import PlacesAutocomplete from "../Autocomplete/Autocomplete"

const AddTripForm = ({ setOriginMarker, setDestinationMarker }) => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "AIzaSyASZVf7r6NNQIoy45ymdwSGtZhSUIqNiI8",
        libraries: ["places"]
    })

    const [newTripData, setNewTripData] = useState({

    })

    const [origin, setOrigin] = useState()

    const [destination, setDestination] = useState()

    return (

        isLoaded ?
            <Form className="form-wrapper">
                <Form.Group className="mb-3">
                    <Form.Label>Origin</Form.Label>
                    <PlacesAutocomplete placeholder={"Where is your departure at?"} setOriginMarker={setOriginMarker} isOrigin={true} name={"origin"} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="XXXXX">
                    <Form.Label>Destination</Form.Label>
                    <PlacesAutocomplete placeholder={"Where is your destination at?"} setDestinationMarker={setDestinationMarker} isOrigin={false} name={"destination"} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="XXXXX">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="XXXXX" name="XXXXX" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="XXXXX">
                    <Form.Label>Passengers</Form.Label>
                    <Form.Control type="XXXXX" name="XXXXX" />
                </Form.Group>

                <div className="d-grid">
                    <Button type="submit">Add Trip</Button>
                </div>
            </Form>
            : <Loader />

    )
}

export default AddTripForm