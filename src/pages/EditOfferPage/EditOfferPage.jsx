import { Container, Row, Col } from 'react-bootstrap'
import EditOfferForm from './../../components/EditOfferForm/EditOfferForm'

import './EditOfferPage.css'

function EditOfferPage() {

    return (

        <Container>
            <Row>
                <Col md={{ offset: 3, span: 6 }}>
                    <h1>Edit offer data</h1>
                    <hr />
                    <EditOfferForm />
                </Col>
            </Row>
        </Container >
    )
}

export default EditOfferPage