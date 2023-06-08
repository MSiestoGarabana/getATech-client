import { useState } from 'react'
import OfferList from '../../components/List_Offer/OfferList'
import MyButton from "../../components/MyButton/MyButton"
import { Modal } from 'react-bootstrap'
import EmployeesSwipe from '../../components/SwipeComponent/EmployeesSwipe/EmployeesSwipe'

import './EmployerHome.css'

function EmployerHomePage({ session_id }) {

    const [selectedOffer, setSelectedOffer] = useState()
    const [showMatchModal, setShowMatchModal] = useState(false)

    return (
        <>
            <div className='employerHome__container--upSection'>
                <OfferList selectedOffer={selectedOffer} setSelectedOffer={setSelectedOffer} />
                <div className='employerHome__container--createNewOffer'>
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
                        <EmployeesSwipe setShowMatch={setShowMatchModal} selectedOffer={selectedOffer} session_id={session_id} />
                    </div>
                    <div className='employerHome__container--matches'>
                        hey
                    </div>
                </div>}

            <Modal className='' show={showMatchModal} onHide={() => setShowMatchModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>MATCH!</Modal.Title>
                </Modal.Header>
            </Modal>

        </>
    )
}
export default EmployerHomePage

