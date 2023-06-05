import { useState, useEffect } from "react"
import { Form, Button, FormGroup } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import offerService from "../../services/offer.services"

function EditUserForm() {

    const [editData, setEditData] = useState({
        image: '',
        position: '',
        salary: '',
        location: '',
        remoteVolume: 0,
        description: '',
        applicants: [],
        _id: ''
    })
    console.log("edit data in editform", editData)

    const { _id, image, position, salary, location, remoteVolume, description, applicants } = editData

    const navigate = useNavigate()

    useEffect(() => {
        loadOfferInfo()
    }, [])

    const { offer_id } = useParams()

    const loadOfferInfo = () => {
        offerService
            .getOfferById(offer_id)
            .then(({ data }) => setEditData(data))
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        const { value, name } = e.target
        setEditData({ ...editData, [name]: value })
    }

    let offerData = { _id, image, position, salary, location, remoteVolume, description, applicants }

    const handleSubmit = e => {
        e.preventDefault()

        offerService
            .updateOffer(editData)
            .then(({ data }) => navigate('/'))
            .catch(err => console.log(err))
    }

    return (

        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="image">
                <Form.Label>Edit image</Form.Label>
                <Form.Control type="text" value={image} onChange={handleInputChange} name="image" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="position">
                <Form.Label>New position name</Form.Label>
                <Form.Control type="text" value={position} onChange={handleInputChange} name="position" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="salary">
                <Form.Label>Update salary</Form.Label>
                <Form.Control type="text" value={salary} onChange={handleInputChange} name="salary" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="location">
                <Form.Label>New Location</Form.Label>
                <Form.Control type="text" value={location} onChange={handleInputChange} name="location" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="remoteVolume">
                <Form.Label>Update remote volume</Form.Label>
                <Form.Control type="text" value={remoteVolume} onChange={handleInputChange} name="remoteVolume" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>New offer description</Form.Label>
                <Form.Control type="text" value={description} onChange={handleInputChange} name="description" />
            </Form.Group>


            <div className="d-grid">
                <Button variant="dark" type="submit">Save Changes</Button>
            </div>

        </Form>
    )
}

export default EditUserForm