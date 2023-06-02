import { Spinner } from "react-bootstrap"
import UserList from "../../components/UserList/UserList"
import { useState, useContext, useEffect } from "react"
import { Container, Row, Modal, Button } from "react-bootstrap"
import userService from '../../services/user.services'

function UserListPage() {

    const [users, setUsers] = useState()
    console.log(users)
    useEffect(() => {
        loadUsers()
    }, [])

    function loadUsers() {
        userService
            .getAllUsers()
            .then(({ data }) => setUsers(data))
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <Row>
                {
                    users
                        ?
                        <UserList users={users} />
                        :
                        <Spinner />
                }
            </Row>
        </Container>
    )
}

export default UserListPage