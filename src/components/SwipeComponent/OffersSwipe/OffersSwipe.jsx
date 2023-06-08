import TinderCard from 'react-tinder-card'
import { useState, useEffect } from "react"
import offerService from '../../../services/offer.services'
import { useSessionData } from '../../../utils/get-session-data'
import { manageEmployeeRightSwipe } from '../../../utils/swipe-utils'
import './OffersSwipe.css'
import { Spinner } from 'react-bootstrap'

function OffersSwipe({ session_id, setShowMatchModal }) {

    const [offersData, setOffersData] = useState([])

    const userData = useSessionData()

    useEffect(() => {
        loadOffersData()
    }, [])

    function loadOffersData() {
        offerService
            .getAllOffers()
            .then(({ data }) => {
                let filteredOffers = data.filter((offer) => {
                    return (
                        !offer.applicants.includes(session_id)
                    )
                })
                setOffersData(filteredOffers)
            })
            .catch(err => console.log(err))
    }


    const swiped = (direction, offer_id) => {
        if (direction === "right") { manageEmployeeRightSwipe(offer_id, userData, setShowMatchModal) }
        if (direction === "up" || direction === "down") { console.log("offerDetails in modal") }
    }

    return (
        <>
            {offersData ? (

                offersData.map(({ _id: offer_id, image, position, location, salary, logo, remoteVolume }) => (
                    <TinderCard
                        className='offersSwipe'
                        key={position}
                        onSwipe={direction => swiped(direction, offer_id)}
                    >

                        <div className='offerCard' id='offerCard'>

                            <img className='offerCard__image' src={image} />

                            <div className='offerCard__container--text'>

                                <div className='offerCard__container--logo-position'>
                                    <div className='offerCard__logo' style={{ backgroundImage: `url(${logo})` }} />
                                    <h3 className='offerCard__text--position'>{position}</h3>
                                </div>

                                <h2>Work available in {location}</h2>

                                <div className='offerCard__container--salary-Remote'>
                                    <div>
                                        <h5>Salary</h5>
                                        <p>{salary}</p>
                                    </div>
                                    <div>
                                        <h5>Remote</h5>
                                        <p>{remoteVolume}%</p>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </TinderCard>
                ))
            ) : (
                <Spinner />
            )}
        </>
    );
}
export default OffersSwipe