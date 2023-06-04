import './HomePage.css'

import SwipePage from '../SwipePage/SwipePage'
import WelcomePage from '../WelcomePage/WelcomePage'
import getSessionData from '../../utils/get-session-data';

function HomePage() {

    const user = getSessionData()

    return (
        <div className='homePage__container'>
            {user._id && (<SwipePage />)}
            {!user._id && (<WelcomePage />)}
        </div>
    )
}

export default HomePage