import { useContext, useState } from 'react';
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context';
import tripService from '../../services/trip.service';

const TripCard = ({ origin_address, destination_address, owner, _id }) => {

    const { user } = useContext(AuthContext)

    const [buttonValue, setButtonValue] = useState([])



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
                    {owner._id === user._id && <>
                        <Button value='edit' className='me-2'>Edit Trip</Button>
                        <Button value='delete' className='me-2'>Delete trip</Button>
                    </>}
                </Link>
            </Card.Body>
        </Card>

    );
}

export default TripCard;