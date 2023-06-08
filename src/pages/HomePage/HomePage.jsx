import EmployeeHomePage from '../EmployeeHomePage/EmployeeHomePage'
import EmployerHomePage from '../EmployerHomePage/EmployerHome';
import WelcomePage from '../WelcomePage/WelcomePage'

import { useSessionData } from '../../utils/get-session-data';

import './HomePage.css'
function HomePage() {


    const sessionData = useSessionData()

    let { _id: session_id } = sessionData

    return (
        <div className='homePage__container'>
            {sessionData?.role === 'EMPLOYEE' && (<EmployeeHomePage session_id={session_id} />)}
            {sessionData?.role === "EMPLOYER" && (<EmployerHomePage session_id={session_id} />)}
            {!sessionData.role && (<WelcomePage />)}
        </div>
    )
}

export default HomePage