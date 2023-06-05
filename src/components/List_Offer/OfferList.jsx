import getSessionData from "../../utils/get-session-data"
import offerService from "../../services/offer.services"
import { useEffect, useState } from "react"
import PreviewCard from "../PreviewCard/PreviewCard"

import './OfferList.css'

function OfferList() {

    let sessionData = getSessionData()
    console.log("SESION DATA", sessionData._id)
    const [offersData, setOffersData] = useState([])
    console.log(offersData)

    useEffect(() => {
        getOffersData()
    }, [])

    function getOffersData() {

        offerService
            .getAllOffers()
            .then(({ data }) => setOffersData(data))
            .catch(err => console.log(err))
    }

    return (
        <div className="offerList__container">
            {offersData.map((offer) => {
                return (
                    <PreviewCard offerData={offer} key={offer._id} />
                )
            })}
        </div>

    )
}

export default OfferList