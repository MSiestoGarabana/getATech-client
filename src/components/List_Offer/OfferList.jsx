import { useSessionData } from "../../utils/get-session-data"
import offerService from "../../services/offer.services"
import { useEffect, useState } from "react"
import PreviewCard__Offer from "../PreviewCard/PreviewCard__Offer"

import './OfferList.css'

function OfferList({ setSelectedOffer, selectedOffer }) {

    const { _id: session_id } = useSessionData()
    const [offersData, setOffersData] = useState([])

    useEffect(() => {
        getOffersData()
    }, [session_id])

    function getOffersData() {
        offerService
            .getAllOffers()
            .then(({ data }) => {
                const filteredOffers = data.filter(offer => offer.owner === session_id)
                setOffersData(filteredOffers)
            })
            .catch(err => console.log(err))
    }



    return (
        <div className="offerList__container">
            {offersData.map((offer) => {
                return (
                    <div key={offer._id} className="offerList__container--offer">
                        <PreviewCard__Offer
                            offer={offer}
                            setSelectedOffer={setSelectedOffer}
                            selectedOffer={selectedOffer}
                            getOffersData={getOffersData}
                        />
                    </div>
                )
            })}
        </div>

    )
}

export default OfferList