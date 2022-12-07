import './SearchTripForm.css'
import { Col, Form, Row, Container, InputGroup, Button } from 'react-bootstrap';
import { Autocomplete } from '@react-google-maps/api';

function SearchTripForm() {

    return (
        <Container fluid className="search-bar">
            <Row className='justify-content-center'>
                <Col md={6}>
                    <Form>
                        <InputGroup>
                            <Form.Control type='text' placeholder='Origin' className='input-group-start'></Form.Control>
                            <Form.Control type='text' placeholder='Destination' ></Form.Control>
                            <Form.Control type='text' placeholder='Date'></Form.Control>
                            <Form.Control type='text' ></Form.Control>
                            <Button className='input-group-end'>
                                Search
                            </Button>
                        </InputGroup>
                    </Form>
                </Col>
            </Row>
        </Container>
    )



}

export default SearchTripForm;