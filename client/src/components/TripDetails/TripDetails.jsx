import './TripDetails.css'
import { useState, useEffect, useParams, useContext } from 'react'
import { Card, Button, ListGroup } from 'react-bootstrap'
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
        currentTrip != 'all' && loadTripDetails(currentTrip)
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

    const { origin_address, destination_address, owner, passengers, stops, date, _id: trip_id } = trip

    const handlePassengers = () => {
        setNewPassenger(passengers)
    }

    useEffect(() => {
        handleTrip()
        handlePassengers()
    }, [tripDetails])

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


                                {owner._id !== user._id &&
                                    <>
                                        <Button onClick={joinTrip} className='me-2'>Join Trip</Button>
                                        <Button onClick={leaveTrip} className='me-2'>Leave Trip</Button>
                                    </>
                                }


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