import './SearchTripForm.css'
import { Col, Form, Row, Container, InputGroup, Button } from 'react-bootstrap';
import { Autocomplete } from '@react-google-maps/api';
import { useLoadScript, Autocomplete } from '@react-google-maps/api'
import DatePicker from "react-widgets/DatePicker";
import Loader from '../Loader/Loader';

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
                                <Form.Control type='text' placeholder='Origin' className='input-group-start'></Form.Control>
                                <Form.Control type='text' placeholder='Destination' ></Form.Control>
                                <DatePicker placeholder="m/dd/yy" />
                                <Form.Control type='text'></Form.Control>
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