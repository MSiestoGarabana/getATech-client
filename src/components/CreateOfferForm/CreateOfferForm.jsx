import { useState } from "react"
import { Form, Button, FormGroup } from "react-bootstrap"
import FormError from "../../components/FormError/FormError"
import { useNavigate } from "react-router-dom"
import uploadServices from "../../services/upload.services"
import offerService from "../../services/offer.services"

import './CreateOfferForm.css'

const CreateOfferForm = () => {

    const [newOfferData, setNewOfferData] = useState({
        image: '',
        logo: '',
        position: '',
        salary: '',
        location: '',
        remoteVolume: '',
        description: '',
    })

    const [loadingImage, setLoadingImage] = useState(false)
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    const handleInputChange = e => {
        const { value, name } = e.target
        setNewOfferData({ ...newOfferData, [name]: value })
    }

    const handleFileUpload = e => {

        setLoadingImage(true)

        const formData = new FormData()
        formData.append('image', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(({ data }) => {
                setNewOfferData({ ...newOfferData, image: data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => {
                console.log(err)
                setLoadingImage(false)
            })
    }

    const handleSubmit = e => {
        e.preventDefault()

        offerService
            .createOffer(newOfferData)
            .then(() => navigate('/'))
            .catch(err => {
                setErrors(err.response.data.errorMessages)
            })
    }

    return (

        <Form className="overflow-auto" id="createOfferForm__container" onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="position">
                <Form.Label>Position</Form.Label>
                <Form.Control type="text" onChange={handleInputChange} name="position" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="image">
                <Form.Label>Image (URL)</Form.Label>
                <Form.Control type="file" onChange={handleFileUpload} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="salary">
                <Form.Label>Salary</Form.Label>
                <Form.Control type="text" onChange={handleInputChange} name="salary" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="location">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" onChange={handleInputChange} name="location" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="remoteVolume">
                <Form.Label>remoteVolume</Form.Label>
                <Form.Control type="text" onChange={handleInputChange} name="remoteVolume" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>description</Form.Label>
                <Form.Control style={{ height: "200px" }} as="textarea" onChange={handleInputChange} name="description" />
            </Form.Group>

            {errors.length > 0 && <FormError>{errors.map(elm => <p>{elm}</p>)}</FormError>}

            <div className="d-grid">
                <Button variant="dark" type="submit" disabled={loadingImage}>
                    {loadingImage ? "Loading Image" : "Register"}
                </Button>
            </div>

        </Form>
    )
}

export default CreateOfferForm