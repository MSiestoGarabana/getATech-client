import './UserDetailComponent.css'

function UserDetailComponent({ userData }) {
    const { role } = userData

    return (
        <div className='userDetail__body'>
            <img className='userDetail__img' src={userData.image} />
            <h1>{userData.username}</h1>
            <h1>{userData.email}</h1>
        </div>
    )
}
export default UserDetailComponent