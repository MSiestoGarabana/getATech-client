import { useState, useEffect } from 'react'
import offerService from '../../services/offer.services'
import userService from '../../services/user.services';
import getSessionData from '../../utils/get-session-data';
import EmployeesSwipe from '../../components/SwipeComponent/EmployeesSwipe/EmployeesSwipe'
import OffersSwipe from '../../components/SwipeComponent/OffersSwipe/OffersSwipe'
import './SwipePage.css'
import EmployerHome from '../../components/EmployerHome/EmployerHome.jsx';


function SwipePage() {

    const userData = getSessionData()

    const [lastDirection, setLastDirection] = useState()

    return (
        <div className='swipePage__container'>
            <div className='cardContainer'>
                {userData.role === 'EMPLOYEE' && (<OffersSwipe setLastDirection={setLastDirection} />)}
                {userData.role === 'EMPLOYER' && (<EmployerHome employerData={userData} />)}
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