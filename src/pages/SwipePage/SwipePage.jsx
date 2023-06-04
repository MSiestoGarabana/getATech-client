import { useState, useEffect } from 'react'
import offerService from '../../services/offer.services'
import userService from '../../services/user.services';
import getSessionData from '../../utils/get-session-data';
import EmployeesSwipe from '../../components/SwipeComponent/EmployeesSwipe/EmployeesSwipe'
import OffersSwipe from '../../components/SwipeComponent/OffersSwipe/OffersSwipe'
import './SwipePage.css'


function SwipePage() {

    const userData = getSessionData()

    const [lastDirection, setLastDirection] = useState()

    const swiped = (direction, _id) => {
        console.log(direction)
        if (direction === "right") {

            offerService
                .updateOffer(_id)
                .then(offer => console.log())
                .catch(err => console.log(err))
        }

        console.log('removing: ' + _id)
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }

    return (
        <div className='swipePage__container'>
            <div className='cardContainer'>
                {userData.role === 'EMPLOYEE' && (<OffersSwipe swiped={swiped} outOfFrame={outOfFrame} />)}
                {userData.role === 'EMPLOYER' && (<EmployeesSwipe swiped={swiped} outOfFrame={outOfFrame} />)}
            </div>
            {/*  {lastDirection ? (
                <h2 className='infoText'>You swiped {lastDirection}</h2>
            ) : (
                <h2 className='infoText' />
            )} */}
        </div>
    );
}

export default SwipePage