import './SearchTripPage.css'
import { useState, useEffect, useContext } from 'react'
import { useParams, useSearchParams, useLocation } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'
import tripService from '../../services/trip.service'
import { Container, Row, Col, InputGroup } from 'react-bootstrap'
import TripList from '../../components/TripList/TripList'
import TripDetails from '../../components/TripDetails/TripDetails'
import PlacesAutocomplete from '../../components/Autocomplete/Autocomplete'
import { MapContext } from '../../context/map.context';

const SearchTripPage = () => {

    const [trips, setTrips] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const { isLoaded } = useContext(MapContext)
    const urlLocation = useLocation()
    const location = {
        origin_lat: searchParams.get('lat_origin'),
        origin_lng: searchParams.get('lng_origin'),
        destination_lat: searchParams.get('lat_destination'),
        destination_lng: searchParams.get('lng_destination'),
    }

    const [markers, setMarkers] = useState({})

    const handleMarkers = (kind, { lat, lng }) => {

        if (kind === "origin_address") {
            setMarkers({ ...markers, origin_address: { lat, lng } })
        } else {
            setMarkers({ ...markers, destination_address: { lat, lng } })
        }
    }

    const { origin_address, destination_address } = markers
    const { origin_lat, origin_lng, destination_lat, destination_lng } = location

    const searchTrips = () => {

        if (urlLocation.pathname !== '/trip/search') {

            tripService
                .searchTrip(origin_lat, origin_lng, destination_lat, destination_lng)
                .then(({ data }) => {
                    console.log(data)
                    setTrips(data)
                })
        }


        if (urlLocation.pathname === '/trip/search' && origin_address?.lat && destination_address?.lat) {

            tripService
                .searchTrip(origin_address.lat, origin_address.lng, destination_address.lat, destination_address.lng)
                .then(({ data }) => {
                    setTrips(data)
                })
        }
    }


    useEffect(() => {
        searchTrips()
    }, [markers])

    if (isLoaded) return (

        <div className='SearchTripPage'>
            <Container>
                <Row className='justify-content-center h-100'>
                    <Col md={5}>
                        <div className='d-flex m-3'>
                            <InputGroup>
                                <PlacesAutocomplete placeholder={'Origin'} kind='origin_address' handleMarkers={handleMarkers}></PlacesAutocomplete>
                                <PlacesAutocomplete placeholder={'Destination'} kind='destination_address' handleMarkers={handleMarkers}></PlacesAutocomplete>
                            </InputGroup>
                        </div>
                    </Col>
                </Row>
                <hr />
                <Row className='justify-content-center h-100'>
                    <Col md={5}>
                        {trips ? <TripList trips={trips} searchTrips={searchTrips} /> : <Loader />}
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default SearchTripPage

// loadTrips = { loadTrips }