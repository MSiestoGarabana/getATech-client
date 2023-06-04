import { useContext } from "react"
import { AuthContext } from "../../contexts/auth.contexts"
import { Container } from "react-bootstrap"

import getUserById from '../../services/user.services'
import getSessionData from '../../utils/get-session-data';
import './ProfilePage.css'

function ProfilePage() {

    const { username } = getSessionData()

    return (
        <Container className="profilePage__container">
            <h1>Hola, {username}</h1>
            <hr />
        </Container>
    )
}

export default ProfilePage