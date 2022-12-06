import { useState, useContext } from "react"
import { Form, Button } from "react-bootstrap"
import authService from "../../services/auth.service"

import { useNavigate } from 'react-router-dom'

import { MessageContext } from '../../context/userMessage.context'


const SignupForm = () => {

    const [signupData, setSignupData] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleInputChange = e => {
        const { value, name } = e.target
        setSignupData({ ...signupData, [name]: value })
    }

    const { setShowToast, setToastMessage } = useContext(MessageContext)

    const navigate = useNavigate()

    const handleSubmit = e => {

        e.preventDefault()

        authService
            .signup(signupData)
            .then(() => {
                setShowToast(true)
                setToastMessage('Usuario creado correctamente')
                navigate('/')
            })
            .catch(err => console.log(err))
    }



    const { username, password, email, firstname, lastname, age } = signupData

    return (

        <Form onSubmit={handleSubmit}>



            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={email} onChange={handleInputChange} name="email" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" value={username} onChange={handleInputChange} name="username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="firstname">
                <Form.Label>First name</Form.Label>
                <Form.Control type="text" value={firstname} onChange={handleInputChange} name="firstname" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="lastname">
                <Form.Label>Last name</Form.Label>
                <Form.Control type="text" value={lastname} onChange={handleInputChange} name="lastname" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="age">
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" value={age} onChange={handleInputChange} name="age" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={password} onChange={handleInputChange} name="password" />
            </Form.Group>



            <div className="d-grid">
                <Button type="submit">Register</Button>
            </div>

        </Form>
    )
}

export default SignupForm