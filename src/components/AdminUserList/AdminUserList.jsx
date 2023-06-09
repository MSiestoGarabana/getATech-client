import { useState, useEffect } from "react"
import userService from "../../services/user.services"

import UserCard from "./UserCard/UserCard"

import './AdminUserList.css'

function AdminUserList() {

    const [usersData, setUsersData] = useState([])
    const [selectedUser, setSelectedUser] = useState()

    useEffect(() => {
        loadUsers()
    }, [])

    function loadUsers() {
        userService
            .getAllUsers()
            .then(({ data }) => {
                setUsersData(data)
            })
            .catch(err => console.log(err))
    }

    function handleDeleteUser(user_id) {
        userService
            .userDelete(user_id)
            .then(() => loadUsers())
            .catch(err => console.log(err))
    }



    return (
        <div className='adminUserList__container--body'>
            {usersData.map((user) => {
                return (
                    <UserCard key={user._id} userData={user} selectedUser={selectedUser} setSelectedUser={setSelectedUser} handleDeleteUser={handleDeleteUser} />
                )
            })}
        </div>
    )
}
export default AdminUserList