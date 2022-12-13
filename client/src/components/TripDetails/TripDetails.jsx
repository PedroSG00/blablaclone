import './TripDetails.css'
import { useState, useEffect, useParams, useContext } from 'react'
import { Card, Button, ListGroup, Container, Row, Col } from 'react-bootstrap'
import Loader from '../Loader/Loader'
import tripService from '../../services/trip.service'
import { useLocation } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'



const TripDetails = () => {

    const { user } = useContext(AuthContext)

    const [trip, setTrip] = useState([])
    const [newPassenger, setNewPassenger] = useState([])
    const [tripDetails, setTripDetails] = useState([])

    const location = useLocation()

    useEffect(() => {
        const starts = location.pathname.lastIndexOf('/') + 1
        const currentTrip = location.pathname.substring(starts)
        currentTrip != 'all' && currentTrip != 'search' && loadTripDetails(currentTrip)
    }, [location])


    const loadTripDetails = (tripIdToLoad) => {
        tripService
            .getTripDetails(tripIdToLoad)
            .then(({ data }) => setTripDetails(data))
            .catch(err => console.log(err))
    }

    const joinTrip = () => {
        tripService
            .joinTrip(trip_id)
            .then(res => loadTripDetails(trip_id))
            .catch(err => console.log(err))
    }

    const leaveTrip = () => {
        tripService
            .leaveTrip(trip_id)
            .then(res => loadTripDetails(trip_id))
            .catch(err => console.log(err))
    }

    const handleTrip = () => {
        setTrip(tripDetails)
    }

    const { origin_address, destination_address, owner, passengers, stops, date, _id: trip_id, car } = trip


    const realDate = (`${new Date(date).getDay()}/${new Date(date).getMonth()}/${new Date(date).getFullYear()}`)

    const handlePassengers = () => {
        setNewPassenger(passengers)
    }

    useEffect(() => {
        handleTrip()
        handlePassengers()
    }, [tripDetails])

    console.log(passengers)

    return (
        <div className='TripDetails'>
            <>
                {
                    trip && owner &&

                    <Card className='m-3'>
                        <Card.Body>
                            <Card.Title><strong>From: </strong>{origin_address}</Card.Title>
                            <Card.Title><strong>To: </strong>{destination_address}</Card.Title>
                            <ListGroup variant="flush">
                                <ListGroup.Item><strong>Driver:</strong> {owner.username}</ListGroup.Item>
                                <ListGroup.Item><strong>Car:</strong> {car.make + " " + car.model}</ListGroup.Item>
                                <ListGroup.Item><strong>Date:</strong> {realDate}</ListGroup.Item>
                                <ListGroup.Item><strong>Passengers:</strong> {passengers.length > 0 ? passengers.map(elm => ` ${elm.username}`) : "There aren't passengers for now"}</ListGroup.Item>
                                <ListGroup.Item><strong>Aviable seats:</strong> {seats - passengers.length !== 0 ? seats - passengers.length : "No more aviable seats on for this trip"}</ListGroup.Item>
                                <ListGroup.Item>{<> {!stops.length === 0 ? `Stops: ${stops}` : "There aren't stops on this trip"}</>}</ListGroup.Item>
                            </ListGroup>


                            {user && (owner._id !== user._id &&
                                <>
                                    <Button onClick={joinTrip} className='me-2'>Join Trip</Button>
                                    <Button onClick={leaveTrip} className='me-2'>Leave Trip</Button>
                                </>)
                            }

                        </Card.Body>
                    </Card>



                }
            </>
        </div >
    )
}

export default TripDetails