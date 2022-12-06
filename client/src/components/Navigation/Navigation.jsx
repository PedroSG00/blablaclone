import './Navigation.css'
import { useContext } from 'react'
import { Nav, Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap'
import { MagnifyingGlass, PlusCircle, UserCircle } from "phosphor-react"
import logo from "./../../assets/logo.png"

const Navigation = () => {


    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home"><img src={logo} className="app-logo"></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='ms-auto'>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#pricing" className='text-color'><MagnifyingGlass size={28} /><span className="nav-title">Search Trips</span></Nav.Link>
                        <Nav.Link href="#deets" className="text-color"><PlusCircle size={28} /><span className="nav-title">Add Trip</span></Nav.Link>
                        <NavDropdown title={<div style={{ display: "inline-block" }}><UserCircle size={28} /></div>} id="collasible-nav-dropdown">
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


