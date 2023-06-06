import './HomePage.css'

import SwipePage from '../SwipePage/SwipePage'
import WelcomePage from '../WelcomePage/WelcomePage'
import EmployerHomePage from '../EmployerHomePage/EmployerHome';
import { useSessionData } from '../../utils/get-session-data';

function HomePage() {
    const sessionData = useSessionData()
    let { _id: session_id } = sessionData

    return (
        <div className='homePage__container'>
            {sessionData?.role === 'EMPLOYEE' && (<SwipePage />)}
            {sessionData?.role === "EMPLOYER" && (<EmployerHomePage session_id={session_id} />)}
            {!sessionData.role && (<WelcomePage />)}
        </div>
    )
}

export default HomePage