import './SearchTripPage.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'
import tripService from '../../services/trip.service'
import { Container, Row, Col } from 'react-bootstrap'
import TripList from '../../components/TripList/TripList'
import TripDetails from '../../components/TripDetails/TripDetails'
import PlacesAutocomplete from '../../components/Autocomplete/Autocomplete'

const SearchTripPage = () => {

    const [trips, setTrips] = useState([])
    const { tripID } = useParams()

    useEffect(() => {
        loadTrips()
    }, [])

    const loadTrips = () => {
        tripService
            .getAllTrips()
            .then(({ data }) => setTrips(data))
            .catch(err => console.log(err))
    }


    return (

        <div className='SearchTripPage'>
            <Container>
                <Row className='justify-content-center h-100'>
                    <Col md={5}>
                        <div className='d-flex m-3'>
                            <PlacesAutocomplete placeholder={'Origin'} searchOrigin={true} setTrips={setTrips} ></PlacesAutocomplete>
                            <PlacesAutocomplete placeholder={'Destination'} searchDestination={true} setTrips={setTrips}></PlacesAutocomplete>
                        </div>

                        {trips ? <TripList trips={trips} /> : <Loader />}
                    </Col>
                    <Col md={5}>
                        <TripDetails />
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default SearchTripPage