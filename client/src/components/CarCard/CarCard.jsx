import { Button, Card, Modal } from 'react-bootstrap'



const CarCard = ({ make, model, color, year, seats, energeticClassification }) => {

    return (
        <>
            <Card className='m-3'>
                <Card.Body>
                    <Card.Title><strong>Make: </strong>{make}</Card.Title>
                    <Card.Text>
                        Model: {model}
                    </Card.Text>
                    <Card.Text>
                        Color: {color}
                    </Card.Text>
                    <Card.Text>
                        Seats: {seats}
                    </Card.Text>
                    <Card.Text>
                        Year: {year}
                    </Card.Text>
                    <Card.Text>
                        Energetic Classification: {energeticClassification}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default CarCard;

