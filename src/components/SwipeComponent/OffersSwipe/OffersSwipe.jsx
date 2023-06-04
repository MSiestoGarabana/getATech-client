import TinderCard from 'react-tinder-card'
import { useState, useEffect } from "react"
import offerService from '../../../services/offer.services'

function OffersSwipe({ swiped, outOfFrame }) {

    const [offersData, setOffersData] = useState([])

    useEffect(() => {
        loadOffersData()
    }, [])

    function loadOffersData() {
        offerService
            .getAllOffers()
            .then(({ data }) => {
                console.log(data)
                setOffersData(data)
            })

            .catch(err => console.log(err))
    }

    return (
        <div>
            {offersData ? (
                offersData.map(({ image, position, location, salary, logo }) => (
                    <TinderCard
                        className='swipe'
                        key={position}
                        onSwipe={dir => swiped(dir, position)}
                        onCardLeftScreen={() => outOfFrame(position)}
                    >
                        <div
                            style={{ backgroundImage: `url(${image})` }}
                            className='card'
                        >
                            <div>
                                <h3>{position}</h3>
                            </div>
                        </div>
                    </TinderCard>
                ))
            ) : (
                <h1>Cargando</h1>
            )}
        </div>
    );
}
export default OffersSwipe