import './SearchTripPage.css'
import { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import SearchTripForm from '../../components/SearchTripForm/SearchTripForm'
import Loader from '../../components/Loader/Loader'
import tripService from '../../services/trip.service'
import TripCard from '../../components/TripCard/TripCard'
import { Container, Row, Col } from 'react-bootstrap'
import TripList from '../../components/TripList/TripList'
import TripDetails from '../../components/TripDetails/TripDetails'

const SearchTripPage = () => {

    const [tripList, setTripList] = useState([])
    const [tripDetails, setTripDetails] = useState([])


    const location = useLocation()

    const handleTripList = () => {
        tripService
            .getAllTrips()
            .then(({ data }) => setTripList(data))
            .catch(err => console.log(err))
    }

    const { tripID } = useParams()


    const handleTripDetails = () => {
        tripService
            .getTripDetails(tripID)
            .then(({ data }) => setTripDetails(data))
            .catch(err => console.log(err))
    }


    const loadTrips = () => {
        handleTripList()
        handleTripDetails()

    }

    useEffect(() => {
        loadTrips()
    }, [location])

    return (

        <Container>
            <Row className='justify-content-center h-100'>
                <Col md={5}>
                    {tripList ? <TripList tripList={tripList} /> : <Loader />}
                </Col>
                <Col md={5}>
                    {tripDetails ? <TripDetails tripDetails={tripDetails} /> : <Loader />}
                </Col>
            </Row>
        </Container>
    )
}

export default SearchTripPage