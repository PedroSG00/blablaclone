import "./AddTrip.css"

import { Container, Row, Col } from "react-bootstrap"
import { useMemo, useState, useEffect } from "react"
import MapComponent from "../../components/GoogleMaps/GoogleMaps"

const AddTrip = () => {
    return (
        <Container className="AddTrip">
            <Row className="justify-content-around h-100">
                <Col md={5}></Col>
                <Col md={5}><MapComponent /></Col>
            </Row>
        </Container>
    )
}

export default AddTrip