import { Container, Row, Col } from 'react-bootstrap'
import EditOfferForm from './../../components/EditOfferForm/EditOfferForm'

import './EditOfferPage.css'

function EditOfferPage() {

    return (

        <Container id="editOfferPage__container">
            <Row >
                <h1>Edit offer data</h1>
                <hr />
                <EditOfferForm />
            </Row>
        </Container >
    )
}

export default EditOfferPage