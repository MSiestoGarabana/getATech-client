import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"

function UserCard({ image, username }) {
    return (
        <Card className="m-5">
            <Card.Img src={image} />
            <Card.Body className="d-flex flex-row justify-content-around">
                <Card.Title>{username}</Card.Title>
                <Link className="btn btn-dark btn-sm">Delete User</Link>
            </Card.Body>
        </Card >
    )
}

export default UserCard