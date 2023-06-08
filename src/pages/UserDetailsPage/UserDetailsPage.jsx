import { useParams } from "react-router-dom"
import UserDetailComponent from "../../components/UserDetailComponent/UserDetailComponent"
import { useEffect, useState } from "react"
import userService from "../../services/user.services"

function UserDetailsPage() {

    let { userId } = useParams()

    const [userData, setUserData] = useState({})

    useEffect(() => {
        userService
            .getUserById(userId)
            .then(({ data }) => {
                setUserData(data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <UserDetailComponent userData={userData} />
    )
}

export default UserDetailsPage