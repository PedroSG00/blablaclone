import { useState, useContext } from "react"
import { Form, Button } from "react-bootstrap"
import authService from "../../services/auth.service"
import uploadServices from "../../services/upload.service"

import { useNavigate } from 'react-router-dom'
import { MessageContext } from '../../context/userMessage.context'


const AddTripForm = () => {


    const [tripData, setTripData] = useState({
        origin_address: '',
        destination_address: '',
        passengers: '',
        date: '',
    })

    return (

        <Form>

            <Form.Group className="mb-3" controlId="XXXXX">
                <Form.Label>Origin</Form.Label>
                <Form.Control type="XXXXX" name="XXXXX" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="XXXXX">
                <Form.Label>Destination</Form.Label>
                <Form.Control type="XXXXX" name="XXXXX" />
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
    )
}

export default AddTripForm