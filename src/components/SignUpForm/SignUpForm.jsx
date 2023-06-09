import { useState } from "react"
import { Form, Button, FormGroup } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import authService from './../../services/auth.services'
import uploadServices from "../../services/upload.services"

const SignupForm = () => {

    const [signupData, setSignupData] = useState({
        username: '',
        email: '',
        password: '',
        role: '',
        image: ''
    })
    const [loadingImage, setLoadingImage] = useState(false)
    const navigate = useNavigate()

    const handleInputChange = e => {
        const { value, name } = e.target
        setSignupData({ ...signupData, [name]: value })
    }

    const handleFileUpload = e => {

        setLoadingImage(true)

        const formData = new FormData()
        formData.append('image', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(({ data }) => {
                setSignupData({ ...signupData, image: data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => {
                console.log(err)
                setLoadingImage(false)
            })
    }

    const handleSubmit = e => {



        e.preventDefault()

        authService
            .signup(signupData)
            .then(({ data }) => navigate('/login'))
            .catch(err => console.log(err))
    }

    return (

        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Choose your username</Form.Label>
                <Form.Control type="text" onChange={handleInputChange} name="username" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Type your password</Form.Label>
                <Form.Control type="password" onChange={handleInputChange} name="password" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="email">
                <Form.Label>What´s your email?</Form.Label>
                <Form.Control type="email" onChange={handleInputChange} name="email" />
            </Form.Group>

            <FormGroup className="mb-3" controlId="role">

                <Form.Label>Select a role</Form.Label>
                <Form.Select name="role" onChange={handleInputChange} aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="EMPLOYEE">EMPLOYEE</option>
                    <option value="EMPLOYER">EMPLOYER</option>
                </Form.Select>

            </FormGroup>

            <Form.Group className="mb-3" controlId="image">
                <Form.Label>Image (URL)</Form.Label>
                <Form.Control type="file" onChange={handleFileUpload} />
            </Form.Group>

            <div className="d-grid">
                <Button variant="dark" type="submit" disabled={loadingImage}>
                    {loadingImage ? "Loading Image" : "Register"}
                </Button>
            </div>

        </Form>
    )
}

export default SignupForm