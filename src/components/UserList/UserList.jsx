import UserCard from '../UserCard/UserCard'
import { Col } from 'react-bootstrap'

function UserList({ users }) {
    return (
        users.map(elm => {
            return (
                <Col md={{ span: 4 }} key={elm._id}>
                    <UserCard {...elm} />
                </Col>
            )
        })
    )
}

export default UserList