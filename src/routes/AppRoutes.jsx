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

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/newoffer' element={<NewOfferPage />} />
            <Route path='/offer/:offer_id' element={<OfferDetails />} />
            <Route path='/offer/editoffer/:offer_id' element={<EditOfferPage />} />
            <Route path='/signup' element={<SignUpPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/user/list' element={<UserListPage />} />
            <Route path='/user/:user_id' element={<ProfilePage />} />
            <Route path='/user/edituser/:userId' element={<EditUserPage />} />
            <Route path='/profile' element={<PrivateRoute />}>
                <Route path='' element={<ProfilePage />} />
            </Route>
            <Route path='*' element={<h1>Error</h1>} />
        </Routes>
    )
}

export default AppRoutes