import EmployeeHomePage from '../EmployeeHomePage/EmployeeHomePage'
import EmployerHomePage from '../EmployerHomePage/EmployerHome';
import WelcomePage from '../WelcomePage/WelcomePage'

import { useSessionData } from '../../utils/get-session-data';

import './HomePage.css'
function HomePage() {

    const sessionData = useSessionData()

    let { _id } = sessionData

    let session_id = _id

    return (
        <div className='homePage__container'>
            {sessionData?.role === 'EMPLOYEE' && (<EmployeeHomePage />)}
            {sessionData?.role === "EMPLOYER" && (<EmployerHomePage session_id={session_id} />)}
            {!sessionData.role && (<WelcomePage />)}
        </div>
    )
}

export default HomePage