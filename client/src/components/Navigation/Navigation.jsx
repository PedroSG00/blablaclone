import './Navigation.css'
import { useContext } from 'react'
import { Nav, Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap'

const Navigation = () => {


    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home" className='text-color'>Rambler</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="#pricing" className='text-color'>Search</Nav.Link>
                        <Nav.Link href="#deets" className='text-color'>Add trip</Nav.Link>
                        <NavDropdown title="Profile" id="collasible-nav-dropdown" className='text-color'>
                            <NavDropdown.Item href="#action/3.1" className='text-color'>View profile</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" className='text-color'>
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" className='text-color'>Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4" className='text-color'>
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation


