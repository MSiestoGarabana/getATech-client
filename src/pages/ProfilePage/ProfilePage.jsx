import { useContext } from "react"
import { AuthContext } from "../../contexts/auth.contexts"
import getUserById from '../../services/user.services'
import getSessionData from '../../utils/get-session-data';

import { Container } from "react-bootstrap"
import MyButton from "../../components/MyButton/MyButton"

import './ProfilePage.css'

function ProfilePage() {

    const { username, _id, role } = getSessionData()

    return (
        <Container className="profilePage__container">
            <h1>Hola, {username}</h1>
            {role === 'EMPLOYER' && <MyButton text="Create Offer" link="/newOffer" className="ProfilePage__newOfferButton" />}
            <hr />
        </Container>
    )
}

export default ProfilePage