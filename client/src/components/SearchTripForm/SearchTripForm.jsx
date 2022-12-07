import './SearchTripForm.css'
import { Col, Form, Row, Container, InputGroup, Button } from 'react-bootstrap';
import { useLoadScript } from '@react-google-maps/api'
import DatePicker from "react-widgets/DatePicker";
import Loader from '../Loader/Loader';
import PlacesAutocomplete from '../Autocomplete/Autocomplete';

function SearchTripForm() {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "AIzaSyASZVf7r6NNQIoy45ymdwSGtZhSUIqNiI8",
        libraries: ["places"]
    })


    return (
        <>{isLoaded ?
            <Container fluid className="search-bar">
                <Row className='justify-content-center'>
                    <Col md={6}>
                        <Form>
                            <InputGroup>
                                <PlacesAutocomplete placeholder={'Origin'}></PlacesAutocomplete>
                                <PlacesAutocomplete placeholder={'Destination'}></PlacesAutocomplete>
                                <DatePicker placeholder="m/dd/yy" />
                                <PlacesAutocomplete placeholder={'Destination'}></PlacesAutocomplete>
                                <Button className='input-group-end'>
                                    Search
                                </Button>
                            </InputGroup>
                        </Form>
                    </Col>
                </Row>
            </Container >
            :
            <Loader />}
        </>

    )



}

export default SearchTripForm;