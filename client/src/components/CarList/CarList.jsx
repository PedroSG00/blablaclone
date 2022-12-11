import './CarList.css'
import { Button, Modal } from 'react-bootstrap'
import { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../../context/auth.context'
import userService from '../../services/user.service'
import CarCard from '../CarCard/CarCard'


const CarList = () => {

    const { user } = useContext(AuthContext)
    const { _id: user_id } = user

    const [userCars, setUserCars] = useState([])

    const [showModal, setShowModal] = useState(false)
    const closeModal = () => {
        console.log('closing modal')
        setShowModal(false)
    }

    const [value, setValue] = useState('')

    const handleValue = e => {
        if (e.target.value === 'create') {
            setShowModal(true)
            setValue('create')
        } else if (e.target.value === 'edit') {
            setValue('edit')
            setShowModal(true)
        } else {
            setValue('delete')
        }
    }

    const loadUserCars = () => {

        userService
            .getUserDetails()
            .then(({ data }) => setUserCars(data.cars))

    }

    useEffect(() => {
        loadUserCars()
    }, [])



    return (
        <div className='CarList justify-content-center'>

            {
                <>
                    <Button value='create' onClick={handleValue}>Create Car</Button>
                    {
                        userCars.map(elm => <CarCard key={elm._id} {...elm} />)
                    }
                </>

            }

            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{value === 'create' ? 'Create car' : 'Edit car'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                </Modal.Body>
            </Modal>

        </div >
    )
}

export default CarList