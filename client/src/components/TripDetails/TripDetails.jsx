import './TripDetails.css'
import { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap'
import Loader from '../Loader/Loader'
import tripService from '../../services/trip.service'
import { Next } from 'react-bootstrap/esm/PageItem'


const TripDetails = ({ tripDetails, }) => {

    const [trip, setTrip] = useState([])

    const joinTrip = () => {
        tripService
            .joinTrip(trip_id)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    const handleTrip = () => {
        setTrip(tripDetails)
    }

    useEffect(() => {
        handleTrip()
    }, [])

    const { origin_address, destination_address, owner, passengers, stops, date, _id: trip_id } = trip

    const { newPassengers, setNewPassengers } = useState([])




    return (
        <div className='TripDetails'>
            <>
                {
                    trip && owner ?
                        <Card className='m-3'>
                            <Card.Body>
                                <Card.Title>{`From: ${origin_address} to: ${destination_address}`}</Card.Title>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>{`Driver: ${owner.username}`}</ListGroup.Item>
                                    <ListGroup.Item>{`Date: ${date}`}</ListGroup.Item>
                                    <ListGroup.Item>{`Passengers: ${passengers.map(elm => ` ${elm.username}`)}.`}</ListGroup.Item>
                                    <ListGroup.Item>{<> {!stops.length === 0 ? `Stops: ${stops}` : "There aren't stops on this trip"}</>}</ListGroup.Item>
                                </ListGroup>
                                <Button onClick={joinTrip}>Join Trip</Button>
                            </Card.Body>
                        </Card>

                        :
                        <div className='d-flex justify-content-center flex-column align-items-center'>
                            <h1 className='text-center'>Choose a trip</h1>
                            <Loader />
                        </div >
                }
            </>
        </div >
    )
}

export default TripDetails