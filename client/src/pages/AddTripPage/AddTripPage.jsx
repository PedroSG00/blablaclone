import "./AddTripPage.css"
import AddTripForm from "../../components/AddTripForm/AddTripForm"
import { Container, Row, Col } from "react-bootstrap"
import { useMemo, useState, useEffect } from "react"
import MapComponent from "../../components/GoogleMaps/GoogleMaps"



const AddTrip = () => {
    const [originMarker, setOriginMarker] = useState({})
    const [destinationMarker, setDestinationMarker] = useState({})
    console.log(" Origen ->", originMarker)
    console.log(" Destino ->", destinationMarker)
    return (
        <Container className="AddTrip ">
            <Row className="justify-content-around h-100">
                <Col md={5}><AddTripForm setOriginMarker={setOriginMarker} setDestinationMarker={setDestinationMarker} /></Col>
                <Col md={5}><MapComponent originMarker={originMarker} destinationMarker={destinationMarker} /></Col>
            </Row>
        </Container>
    )
}

export default AddTrip