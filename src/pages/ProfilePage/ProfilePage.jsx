import { useContext } from "react"
import { AuthContext } from "../../contexts/auth.contexts"
import getUserById from '../../services/user.services'
import { useSessionData } from '../../utils/get-session-data';

import { Container } from "react-bootstrap"
import MyButton from "../../components/MyButton/MyButton"

import './ProfilePage.css'
import UserDetailComponent from "../../components/UserDetailComponent/UserDetailComponent";

function ProfilePage() {

    const userData = useSessionData()

    return (
        <Container className="profilePage__container">
            <UserDetailComponent userData={userData} />
            {userData.role === 'EMPLOYEE' && <MyButton text="Update Profile" link={`/user/editUser/${userData._id}`} className="ProfilePage__updateProfileButton" />}
            {userData.role === 'EMPLOYER' &&
                <div style={{ marginTop: "5%", display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                    <MyButton text="Update Profile" link={`/user/editUser/${userData._id}`} className="ProfilePage__updateProfileButton" />
                </div>
            }
        </Container>
    )
}

export default ProfilePage