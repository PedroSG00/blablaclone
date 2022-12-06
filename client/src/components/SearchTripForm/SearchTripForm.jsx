import './SearchTripForm.css'
import { Col, Form, Row, Container, InputGroup, Button } from 'react-bootstrap';

function SearchTripForm() {

    return (
        <Container>
            <Row className='justify-content-center'>
                <Col md={6}>
                    <Form>
                        <InputGroup>
                            <Form.Control type='text' placeholder='Origin' ></Form.Control>
                            <Form.Control type='text' placeholder='Destination' ></Form.Control>
                            <Form.Control type='text' placeholder='Date'></Form.Control>
                            <Form.Control type='text' ></Form.Control>
                            <Button>
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