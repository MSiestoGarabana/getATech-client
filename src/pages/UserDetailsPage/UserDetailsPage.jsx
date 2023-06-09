import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


import { Container } from 'react-bootstrap';
import userService from '../../services/user.services';
import MyButton from "../../components/MyButton/MyButton"
import UserDetailComponent from "../../components/UserDetailComponent/UserDetailComponent";

import './UserDetailsPage.css'

function UserDetailsPage() {

    let { userId } = useParams()

    const [userData, setUserData] = useState({})

    useEffect(() => {
        userService
            .getUserById(userId)
            .then(({ data }) => setUserData(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <Container className="profilePage__container">
            <UserDetailComponent userData={userData} />
        </Container>
    )
}

export default UserDetailsPage