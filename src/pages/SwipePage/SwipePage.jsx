import { useState } from 'react'
import OffersSwipe from '../../components/SwipeComponent/OffersSwipe/OffersSwipe'
import './SwipePage.css'


function SwipePage() {

    const [lastDirection, setLastDirection] = useState()

    return (
        <div className='swipePage__container'>
            <div className='cardContainer'>
                <OffersSwipe setLastDirection={setLastDirection} />
            </div>
            {/*  {lastDirection ? (
                <h2 className='infoText'>You swiped {lastDirection}</h2>
            ) : (
                <h2 className='infoText' />
            )} */}
        </div>
    );
}

export default SwipePage