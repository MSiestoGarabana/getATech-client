import { Container, Row } from 'react-bootstrap'
import CreateOfferForm from '../../components/CreateOfferForm/CreateOfferForm'

import './NewOfferPage.css'

function NewOfferPage() {
    return (
        <Container id='newOfferPage__container'>
            <Row>
                <h1>Create new offer</h1>
                <CreateOfferForm />
                <hr />
            </Row>
        </Container >
    )
}

export default NewOfferPage