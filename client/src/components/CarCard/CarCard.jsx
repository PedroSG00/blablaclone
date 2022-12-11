import { Button, Card, Modal } from 'react-bootstrap'
import EditCarForm from '../EditCarForm/EditCarForm';
import carsService from '../../services/cars.service';
import { useState } from 'react';



const CarCard = ({ make, model, color, year, seats, energeticClassification, _id: car_id }) => {



    const [showModal, setShowModal] = useState(false)
    const closeModal = () => {
        console.log('closing modal')
        setShowModal(false)
    }
    const [value, setValue] = useState('')

    const handleValue = e => {
        if (e.target.value === 'edit') {
            setShowModal(true)
            setValue('edit')
        } else {
            setValue('delete')
            removeCar()
        }
    }


    const removeCar = () => {
        carsService
            .deleteCar(car_id)
            .then(data => console.log(data))
    }


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

            <Button value='edit' onClick={handleValue} className='me-2'>Edit Trip</Button>
            <Button value='delete' onClick={handleValue} className='me-2'>Delete trip</Button>


            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Trip</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditCarForm car_id={car_id} />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default CarCard;

