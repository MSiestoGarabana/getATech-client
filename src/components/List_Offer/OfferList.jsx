import getSessionData from "../../utils/get-session-data"
import offerService from "../../services/offer.services"
import { useEffect, useState } from "react"
import PreviewCard__Offer from "../PreviewCard/PreviewCard__Offer"

import './OfferList.css'

function OfferList() {

    const { _id: session_id } = getSessionData()

    const [offersData, setOffersData] = useState([])

    useEffect(() => {
        getOffersData()
    }, [session_id])

    function getOffersData() {
        offerService
            .getAllOffers()
            .then(({ data }) => {
                console.log("session_id", session_id)
                const filteredOffers = data.filter(offer => {
                    console.log(offer.owner === session_id)
                    console.log("OFFEEEEER", offer)
                    return offer.owner === session_id
                });
                console.log("FILTERED OFFERRRRSSSS", filteredOffers)
                setOffersData(filteredOffers)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="offerList__container">
            {offersData.map((offer) => {
                return (
                    <PreviewCard__Offer offerData={offer} key={offer._id} />
                )
            })}
        </div>

    )
}

export default OfferList