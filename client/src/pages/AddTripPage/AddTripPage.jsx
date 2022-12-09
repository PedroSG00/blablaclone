import "./AddTripPage.css"
import AddTripForm from "../../components/AddTripForm/AddTripForm"
import { Container, Row, Col } from "react-bootstrap"
import { useState } from "react"
import MapComponent from "../../components/GoogleMaps/GoogleMaps"



const AddTrip = () => {
    const [origin, setOrigin] = useState({})
    const [destination, setDestination] = useState({})
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
                <Col md={5}><AddTripForm setOrigin={setOrigin} origin={origin} setDestination={setDestination} destination={destination} /></Col>
                <Col md={5}><MapComponent center={initialCenter} /></Col>
            </Row>
        </Container>
    )
}

export default AddTrip