import './UserDetailComponent.css'

function UserDetailComponent({ userData }) {
    console.log("userData", userData)
    const { role } = userData
    console.log("ROOOOOOOL", role)

    return (
        <div className='userDetail__body'>
            <img className='userDetail__img' src={userData.image} />
            <h1>{userData.username}</h1>
            <h1>{userData.email}</h1>
        </div>
    )
}
export default UserDetailComponent