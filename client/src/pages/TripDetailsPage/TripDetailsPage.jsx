import './TripDetailsPage.css'
import { Row, Col, Container } from 'react-bootstrap'
import TripDetails from '../../components/TripDetails/TripDetails'


const TripDetailsPage = () => {

    return (
        <div className='ProfilePage'>
            <Container className='mt-5'>
                <Row className='justify-content-around'>
                    <Col md={5} className='m-2'>
                        <TripDetails />
                    </Col>
                    <Col md={5}>
                        Aqui va un mapa
                    </Col>
                </Row>
            </Container>

        </div >
    )
}

export default TripDetailsPage