import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import authService from './../../services/auth.services'
import { useNavigate } from 'react-router-dom'

function LoginForm() {

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = e => {
        const { value, name } = e.target
        setLoginData({ ...loginData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        authService
            .login(loginData)
            .then(({ data }) => {
                console.log("RESPUESTA", data)
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    const navigate = useNavigate()


    const { password, email } = loginData

    return (

        <Form onSubmit={handleSubmit}>


            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={email} onChange={handleInputChange} name="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" value={password} onChange={handleInputChange} name="password" />
            </Form.Group>

            <div className="d-grid">
                <Button variant="dark" type="submit">Acceder</Button>
            </div>

        </Form>
    )
}

export default LoginForm