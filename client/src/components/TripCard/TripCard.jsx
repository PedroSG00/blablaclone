import { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import Loader from '../Loader/Loader';
const TripCard = ({ tripData }) => {

    const [trip, setTrip] = useState([])

    const handleTrip = () => {
        setTrip(tripData)
    }

    useEffect(() => {
        handleTrip()
    }, [])

    const { origin_address, destination_address, owner } = trip

    return (
        <>
            {
                trip && owner
                    ?
                    <Card>
                        <Card.Img variant="top" src={owner.imageUrl} />
                        <Card.Body>
                            <Card.Title>{`From: ${origin_address} to: ${destination_address}`}</Card.Title>
                            <Card.Text>
                                Driver: {owner.username}
                            </Card.Text>
                            <Button>Show Details</Button>
                        </Card.Body>
                    </Card>
                    :
                    <Loader />
            }
        </>
    );
}

export default TripCard;