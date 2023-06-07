import { useState } from 'react'
import OfferList from '../../components/List_Offer/OfferList'
import MyButton from "../../components/MyButton/MyButton"
import EmployeesSwipe from '../../components/SwipeComponent/EmployeesSwipe/EmployeesSwipe'

import './EmployerHome.css'

function EmployerHomePage({ session_id }) {

    const [selectedOffer, setSelectedOffer] = useState()

    let offer_id
    if (selectedOffer) { offer_id = selectedOffer._id }

    return (
        <>
            <div className='employerHome__container--upSection'>
                <OfferList setSelectedOffer={setSelectedOffer} />
                <div className='employerHome__container--createNewOffer'>
                    <h1>Your offers</h1>
                    <MyButton text="Create Offer" link="/newOffer" className="ProfilePage__newOfferButton" />
                </div>
            </div>
            <div>
                {!selectedOffer && <h1 className='employerHome__text--noOfferSelected'>Select an offer to start scrolling</h1>}
                {selectedOffer && <EmployeesSwipe offer_id={offer_id} session_id={session_id} />}
            </div>
        </>
    )
}
export default EmployerHomePage

