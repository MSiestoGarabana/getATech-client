import deleteIcon from '../../PreviewCard/PreviewCardIcons/deleteIcon.png'
import './UserCard.css'

function UserCard({ userData, selectedUser, setSelectedUser, handleDeleteUser }) {
    let isSelected = selectedUser === userData
    console.log(isSelected)

    let { _id: user_id } = userData

    return (
        <div onClick={() => setSelectedUser(userData)} className='userCard__container--body'>
            <div >
                <img src={userData.image} className='userCard__img' />
            </div>
            <div className='userCard__container--downSection'>
                {
                    isSelected && <>
                        <button onClick={() => handleDeleteUser(user_id)} className="userCard__button--delete">
                            <img className='userCard__icon--delete' src={deleteIcon} />
                        </button>
                    </>
                }
                {
                    !isSelected && <>
                        <button className="userCard__button--delete">
                            <img className='userCard__icon--delete'></img>
                        </button>
                    </>
                }
                <h3 className='userCard__h3'>{userData.username}</h3>
            </div>
        </div>
    )
}

export default UserCard