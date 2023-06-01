import { useState, useEffect } from "react"
import { Form, Button, FormGroup } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import userService from "../../services/user.services"

function EditUserForm() {


    const [editData, setEditData] = useState({
        username: '',
        email: '',
        role: '',
        _id: ''
    })
    const { username, email, role, _id } = editData


    const navigate = useNavigate()


    useEffect(() => {
        loadUserInfo()
    }, [])


    const { userId } = useParams()

    const loadUserInfo = () => {
        userService
            .getUserById(userId)
            .then(({ data }) => setEditData(data))
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        const { value, name } = e.target
        setEditData({ ...editData, [name]: value })
    }

    let userData = { username, email, role, _id }
    const handleSubmit = e => {
        e.preventDefault()

        userService
            .userUpdate(userData)
            .then(({ data }) => navigate('/'))
            .catch(err => console.log(err))
    }

    return (

        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Write new username</Form.Label>
                <Form.Control type="text" value={username} onChange={handleInputChange} name="username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Update email</Form.Label>
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
                <Button variant="dark" type="submit">Save Changes</Button>
            </div>

        </Form>
    )
}

export default EditUserForm