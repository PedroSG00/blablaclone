import './Navigation.css'
import { useContext } from 'react'
import { Nav, Container, Navbar, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap'
import { MagnifyingGlass, PlusCircle, UserCircle } from "phosphor-react"
import logo from "./../../assets/logo.png"
import { AuthContext } from '../../context/auth.context'
import LoginForm from '../LogInForm/LogInForm'

const Navigation = () => {

    const { user, logoutUser } = useContext(AuthContext)



    return (
        <>
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

                                {user ?
                                    <>
                                        <NavDropdown.Item href="#action/3.1" className='text-color'>View profile</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2" className='text-color' onClick={logoutUser}>
                                            Log Out
                                        </NavDropdown.Item>
                                    </>
                                    :
                                    <>
                                        <Link to='/sign-up'>
                                            <NavDropdown.Item as='button' value='sign-up' className='text-color bg-transparent'>Sign Up</NavDropdown.Item>
                                        </Link>
                                        <Link to='/log-in'>
                                            <NavDropdown.Item as='button' value='log-in' className='text-color bg-transparent'>Log in</NavDropdown.Item>
                                        </Link>
                                    </>
                                }
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal />
        </>

    )
}



export default Navigation


