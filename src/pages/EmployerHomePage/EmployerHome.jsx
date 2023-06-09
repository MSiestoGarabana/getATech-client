import { useEffect, useState } from 'react'
import OfferList from '../../components/List_Offer/OfferList'
import MyButton from "../../components/MyButton/MyButton"
import { Modal } from 'react-bootstrap'
import EmployeesSwipe from '../../components/SwipeComponent/EmployeesSwipe/EmployeesSwipe'

import './EmployerHome.css'
import userService from '../../services/user.services'

function EmployerHomePage({ session_id }) {

    const [selectedOffer, setSelectedOffer] = useState()
    const [showMatchModal, setShowMatchModal] = useState(false)
    const [matchesData, setMatchesData] = useState([])


    function loadMatchesData(data) {
        setMatchesData(data)
    }

    useEffect(() => {

        if (selectedOffer) {

            const promises = selectedOffer.applicants.map((_id) => {
                return userService
                    .getUserById(_id)
                    .then(({ data }) => data)
                    .catch((err) => {
                        console.log(err)
                        return null
                    });
            });

            Promise.all(promises)
                .then((results) => {
                    loadMatchesData(results)
                })
                .catch((error) => {
                    console.log(error)
                })

        };
    }, [selectedOffer])




    return (
        <>
            <div className='employerHome__container--upSection'>
                <OfferList selectedOffer={selectedOffer} setSelectedOffer={setSelectedOffer} loadMatchesData={loadMatchesData} />
                <div className='employerHome__container--createNewOffer'>
                    <MyButton text="Create Offer" link="/newOffer" className="ProfilePage__newOfferButton" />
                </div>
            </div>



            {
                !selectedOffer &&
                <h1 className='employerHome__text--noOfferSelected'>
                    Select an offer to start scrolling
                </h1>
            }

            {
                selectedOffer &&
                <div className='employerHome__container--downSection'>
                    <div className='employerHome__container--swipe'>
                        <EmployeesSwipe setShowMatch={setShowMatchModal} selectedOffer={selectedOffer} session_id={session_id} />
                    </div>
                    <div className='employerHome__container--matches'>
                        {matchesData.map((user) => {
                            return (
                                <h1 key={user._id}>{user.username}</h1>
                            )
                        })}
                    </div>
                </div>
            }

            <Modal id='modal' show={showMatchModal} onHide={() => setShowMatchModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>MATCH!</Modal.Title>
                </Modal.Header>
            </Modal>

        </>
    )
}
export default EmployerHomePage

