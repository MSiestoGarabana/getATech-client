import { Container, Row, Col } from 'react-bootstrap'
import EditUserForm from './../../components/EditUserForm/EditUserForm'

function EditUserPage() {

    return (

        <Container>

            <Row>

                <Col md={{ offset: 3, span: 6 }}>

                    <h1>Edit User</h1>

                    <hr />

                    <EditUserForm />

                </Col>
            </Row>

        </Container>
    )
}

export default EditUserPage