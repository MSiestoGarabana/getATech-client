import { Link } from 'react-router-dom'
import { Button, Row, Col } from 'react-bootstrap'
import deleteIcon from '../PreviewCard/PreviewCardIcons/deleteIcon.png'
import { useSessionData } from '../../utils/get-session-data'

import MyButton from '../MyButton/MyButton'

import './UserDetailComponent.css'

function UserDetailComponent({ userData }) {
    console.log(userData)
    const { _id: session_id } = useSessionData()
    const { _id } = userData

    let isOwner = _id === session_id
    console.log(isOwner)

    return (
        <Row id='userDetail__body'>
            <Col id='userDetail__container--col'>
                {!isOwner &&
                    <button id="userDetail__button--homepageButton">
                        <Link to='/homepage'>
                            <img id="userDetail__img--closeButton" src={deleteIcon}></img>
                        </Link>
                    </button>
                }
                {isOwner &&
                    <div id="userDetail__button--homePageButton"></div>
                }

                <img className='userDetail__img' src={userData.image} />
                <h1>{userData.username}</h1>
                <h1>{userData.email}</h1>

                {!isOwner &&
                    <div className="userDetail__container--update"></div>
                }

                {isOwner &&
                    <div className="userDetail__container--update">
                        <MyButton text="Update profile" link={`/user/editUser/${userData._id}`} className="userDetail__button--update" />
                    </div>
                }
            </Col>
        </Row>
    )
}
export default UserDetailComponent