import "./AddTripPage.css"
import AddTripForm from "../../components/AddTripForm/AddTripForm"
import { Container, Row, Col } from "react-bootstrap"
import { useMemo, useState, useEffect } from "react"
import MapComponent from "../../components/GoogleMaps/GoogleMaps"



const AddTrip = () => {
    const [originMarker, setOriginMarker] = useState({})
    const [destinationMarker, setDestinationMarker] = useState({})
    const [lat, setLat] = useState()
    const [lng, setLng] = useState()

    navigator.geolocation.getCurrentPosition(pos => {
        setLat(pos.coords.latitude)
        setLng(pos.coords.longitude)
    })

    const initialCenter = { lat, lng }



    return (
        <Container className="AddTrip ">
            <Row className="justify-content-around h-100">
                <Col md={5}><AddTripForm setOriginMarker={setOriginMarker} setDestinationMarker={setDestinationMarker} /></Col>
                <Col md={5}><MapComponent originMarker={originMarker} destinationMarker={destinationMarker} center={initialCenter} /></Col>
            </Row>
        </Container>
    )
}

export default AddTrip