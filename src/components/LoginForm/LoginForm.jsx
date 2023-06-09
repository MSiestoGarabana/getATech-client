import { useContext, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import authService from './../../services/auth.services'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.contexts'

import './LoginForm.css'

function LoginForm() {

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()
    const { authenticateUser, storeToken } = useContext(AuthContext)

    const handleInputChange = e => {
        const { value, name } = e.target
        setLoginData({ ...loginData, [name]: value })
    }

    const handleSubmit = e => {

        e.preventDefault()

        authService
            .login(loginData)
            .then(({ data }) => {
                storeToken(data.authToken)
                authenticateUser()
                navigate('/homepage')
            })
            .catch(err => console.log(err))
    }




    const { password, email } = loginData

    return (

        <Form onSubmit={handleSubmit} id="loginForm__container--body">

            <Form.Group className="mb-3" controlId="email">
                <Form.Label id="loginForm__text">Email</Form.Label>
                <Form.Control type="email" value={email} onChange={handleInputChange} name="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label id="loginForm__text">Contraseña</Form.Label>
                <Form.Control type="password" value={password} onChange={handleInputChange} name="password" />
            </Form.Group>

            <div className="d-grid">
                <Button variant="primary" type="submit">Acceder</Button>
            </div>

        </Form>
    )
}

export default LoginForm