import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import NewOfferPage from '../pages/NewOfferPage/NewOfferPage'
import OfferDetails from '../pages/OfferDetailsPage/OfferDetails'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import PrivateRoute from './PrivateRoute'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/newOffer' element={<NewOfferPage />} />
            <Route path='/offer/:offer_id' element={<OfferDetails />} />
            <Route path='/signUp' element={<SignUpPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/profile' element={<PrivateRoute />}>
                <Route path='' element={<ProfilePage />} />
            </Route>

            <Route path='*' element={<h1>Error</h1>} />
        </Routes>
    )
}

export default AppRoutes