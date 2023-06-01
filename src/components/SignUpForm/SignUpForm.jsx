import { useState } from "react"
import { Form, Button, FormGroup } from "react-bootstrap"
import authService from './../../services/auth.services'
import { useNavigate } from "react-router-dom"

const SignupForm = () => {

    const [signupData, setSignupData] = useState({
        username: '',
        email: '',
        password: '',
        role: ''
    })
    const { username, password, email, role } = signupData

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { value, name } = e.target
        setSignupData({ ...signupData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        let userData = { email, password }
        authService
            .signup(signupData)
            .then(({ data }) => navigate('/login'))
            .catch(err => console.log(err))
    }

    return (

        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Choose your username</Form.Label>
                <Form.Control type="text" value={username} onChange={handleInputChange} name="username" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Type your password</Form.Label>
                <Form.Control type="password" value={password} onChange={handleInputChange} name="password" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="email">
                <Form.Label>What´s your email?</Form.Label>
                <Form.Control type="email" value={email} onChange={handleInputChange} name="email" />
            </Form.Group>

            <FormGroup className="mb-3" controlId="role">

                <Form.Label>Select a role</Form.Label>
                <Form.Select name="role" onChange={handleInputChange} aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="EMPLOYEE">EMPLOYEE</option>
                    <option value="EMPLOYER">EMPLOYER</option>
                </Form.Select>

            </FormGroup>


            <div className="d-grid">
                <Button variant="dark" type="submit">Registrarme</Button>
            </div>

        </Form>
    )
}

export default SignupForm