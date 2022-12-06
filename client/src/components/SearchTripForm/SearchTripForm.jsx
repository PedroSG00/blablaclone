import './SearchTripForm.css'
import { Button, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function SearchTripForm() {




    return (
        <div className='SearchTripForm'>
            <Row>
                <Col md={{ span: 6, offset: 4 }}>
                    <Form>
                        <Row>
                            <Col md={2}>
                                <Form.Group className="mb-3" controlId="XXXXXX">
                                    <Form.Control type="XXXXXX" placeholder="Origin" />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col md={2}>
                                <Form.Group className="mb-3" controlId="XXXXXX">
                                    <Form.Control type="XXXXXX" placeholder="Destination" />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col md={2}>
                                <Form.Group className="mb-2" controlId="XXXXXX">
                                    <Form.Control type="XXXXXX" placeholder="Date" />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col md={2}>

                                <Form.Group className="mb-3" controlId="XXXXXX">
                                    <Form.Control type="XXXXXX" placeholder="Passengers" />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col md={2}>
                                <Button className='bg-color border border-0' type="submit">
                                    Search
                                </Button>
                            </Col>

                        </Row>
                    </Form>
                </Col>


            </Row>

        </div >
    );

}

export default SearchTripForm;