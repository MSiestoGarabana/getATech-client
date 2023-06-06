import { useState } from 'react'
import OfferList from '../../components/List_Offer/OfferList'
import MyButton from "../../components/MyButton/MyButton"
import EmployeesSwipe from '../../components/SwipeComponent/EmployeesSwipe/EmployeesSwipe'

function EmployerHomePage({ session_id }) {

    const [selectedOffer, setSelectedOffer] = useState()

    console.log(" selected offer info", selectedOffer)

    let offer_id
    if (selectedOffer) { offer_id = selectedOffer._id }

    return (
        <>
            <OfferList setSelectedOffer={setSelectedOffer} />
            <h1>Active Offers</h1>
            <MyButton text="Create Offer" link="/newOffer" className="ProfilePage__newOfferButton" />
            {!selectedOffer && <h1>Select an offer to start scrolling</h1>}
            {selectedOffer && <EmployeesSwipe offer_id={offer_id} session_id={session_id} />}
        </>
    )
}
export default EmployerHomePage

