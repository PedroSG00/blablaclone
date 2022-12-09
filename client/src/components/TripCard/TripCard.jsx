import { useContext, useState } from 'react';
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context';
import tripService from '../../services/trip.service';

const TripCard = ({ origin_address, destination_address, owner, _id }) => {

    const { user } = useContext(AuthContext)

    // const [buttonValue, setButtonValue] = useState([])

    const deleteTrip = () => {
        tripService
            .deleteTrip(_id)
            .then(data => console.log(data))
    }

    const editTrip = () => {
        tripService
            .editTrip(_id)
            .then(() => console.log('PASO'))
    }

    return (
        <Card className='m-3'>
            <Card.Img variant="top" src={owner.imageUrl} />
            <Card.Body>
                <Card.Title>{`From: ${origin_address} to: ${destination_address}`}</Card.Title>
                <Card.Text>
                    Driver: {owner.username}
                </Card.Text>
                <Link to={`/trips/${_id}`}>
                    <Button className='me-2'>Show Details</Button>
                </Link>
                {user && (owner._id === user._id && <>
                    <Button onClick={editTrip} className='me-2'>Edit Trip</Button>
                    <Button onClick={deleteTrip} className='me-2'>Delete trip</Button>
                </>)}
            </Card.Body>
        </Card>

    );
}

export default TripCard;