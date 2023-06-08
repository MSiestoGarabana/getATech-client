import { useState } from 'react'
import OfferList from '../../components/List_Offer/OfferList'
import MyButton from "../../components/MyButton/MyButton"
import { Modal } from 'react-bootstrap'
import EmployeesSwipe from '../../components/SwipeComponent/EmployeesSwipe/EmployeesSwipe'

import './EmployerHome.css'

function EmployerHomePage({ session_id }) {

    const [selectedOffer, setSelectedOffer] = useState()
    console.log("SELECTED OFFER", selectedOffer)

    const [showMatchModal, setShowMatchModal] = useState(false)
    console.log("Match?", showMatchModal)

    return (
        <>
            <div className='employerHome__container--upSection'>
                <OfferList setSelectedOffer={setSelectedOffer} />
                <div className='employerHome__container--createNewOffer'>
                    <h1>Your offers</h1>
                    <MyButton text="Create Offer" link="/newOffer" className="ProfilePage__newOfferButton" />
                </div>
            </div>

            {!selectedOffer &&
                <h1 className='employerHome__text--noOfferSelected'>
                    Select an offer to start scrolling
                </h1>}

            {selectedOffer &&
                <div className='employerHome__container--downSection'>
                    <div className='employerHome__container--swipe'>
                        <EmployeesSwipe setShowMatch={setShowMatchModal} offer={selectedOffer} session_id={session_id} />
                    </div>
                    <div className='employerHome__container--matches'>
                        hey
                    </div>
                </div>}

            <Modal className='modal__match' show={showMatchModal} onHide={() => setShowMatchModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>MATCH!</Modal.Title>
                </Modal.Header>
            </Modal>

        </>
    )
}
export default EmployerHomePage

