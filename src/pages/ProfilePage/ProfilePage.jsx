import { useContext } from "react"
import { AuthContext } from "../../contexts/auth.contexts"
import { Container } from "react-bootstrap"

function ProfilePage() {

    const { user } = useContext(AuthContext)
    console.log(user)

    return (
        <Container>
            <h1>Hola, {user.username}</h1>
            <hr />
        </Container>
    )
}

export default ProfilePage