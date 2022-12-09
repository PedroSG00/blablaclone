import './ProfilePage.css'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import { Row, Col, Container } from 'react-bootstrap'
import tripService from '../../services/trip.service'
import { useState, useEffect } from 'react'
import TripList from '../../components/TripList/TripList'
import Loader from '../../components/Loader/Loader'

const ProfilePage = () => {

    const [trips, setTrips] = useState([])

    const loadOwnTrips = () => {
        tripService
            .getOwnTrips()
            .then(({ data }) => {
                setTrips(data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadOwnTrips()
    }, [])

    return (
        <div className='ProfilePage'>
            <Container className='mt-5'>
                <Row className='align-items-center justify-content-between'>
                    <Col md={5} className='m-2'>
                        <ProfileCard />
                    </Col>
                    <Col md={5}>
                        <h2>My trips:</h2>
                        {trips ? <TripList trips={trips} /> : <Loader />}
                    </Col>
                </Row>
            </Container>

        </div >
    )
}

export default ProfilePage