import { useEffect, useState } from 'react'
import offerService from '../../services/offer.services'

import OfferCard from './OfferCard/OfferCard'

import './AdminOfferList.css'

function AdminOfferList() {

    const [offersData, setOffersData] = useState([])
    const [selectedOffer, setSelectedOffer] = useState()
    console.log(selectedOffer)

    useEffect(() => {
        loadOffers()
    }, [])

    function loadOffers() {
        offerService
            .getAllOffers()
            .then(({ data }) => {
                setOffersData(data)
            })
            .catch(err => console.log(err))
    }

    function handleDeleteOffer(offer_id) {
        offerService
            .deleteOffer(offer_id)
            .then(() => loadOffers())
            .catch(err => console.log(err))
    }

    return (
        <div className='adminOfferList__container--body'>
            {offersData.map((offer) => {
                return (
                    <OfferCard offerData={offer} selectedOffer={selectedOffer} setSelectedOffer={setSelectedOffer} handleDeleteOffer={handleDeleteOffer} />
                )
            })}
        </div>

    )
}

export default AdminOfferList