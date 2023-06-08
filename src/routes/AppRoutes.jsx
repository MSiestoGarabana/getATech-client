import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import NewOfferPage from '../pages/NewOfferPage/NewOfferPage'
import OfferDetails from '../pages/OfferDetailsPage/OfferDetails'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import PrivateRoute from './PrivateRoute'
import EditUserPage from '../pages/EditUserPage/EditUserPage'
import EditOfferPage from '../pages/EditOfferPage/EditOfferPage'
import UserListPage from '../pages/UserListPage/UserListPage'
import EmployeeHomePage from '../pages/EmployeeHomePage/EmployeeHomePage'
import EmployerHomePage from '../pages/EmployerHomePage/EmployerHome'
import WelcomePage from '../pages/WelcomePage/WelcomePage'
import UserDetailsPage from '../pages/UserDetailsPage/UserDetailsPage'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path='/signup' element={<SignUpPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/user/list' element={<UserListPage />} />
            {/* TODO: REVISAR RUTAS */}

            <Route element={<PrivateRoute />}>
                <Route path='/user/:userId' element={<UserDetailsPage />} />
                <Route path='/user/edituser/:userId' element={<EditUserPage />} />
                <Route path='/offer/:offer_id' element={<OfferDetails />} />
                <Route path='/offer/editoffer/:offer_id' element={<EditOfferPage />} />
                <Route path='/newOffer' element={<NewOfferPage />} />
                <Route path='/profile' element={<ProfilePage />} />
                <Route path='/homePage' element={<HomePage />} />
                <Route path='/employeeHome' element={<EmployeeHomePage />} />
                <Route path='/employerHome' element={<EmployerHomePage />} />
            </Route>
            <Route path='*' element={<h1>Error</h1>} />
        </Routes>
    )
}

export default AppRoutes