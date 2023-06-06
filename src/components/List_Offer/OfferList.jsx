import { useSessionData } from "../../utils/get-session-data"
import offerService from "../../services/offer.services"
import { useEffect, useState } from "react"
import PreviewCard__Offer from "../PreviewCard/PreviewCard__Offer"
import MyButton from "../MyButton/MyButton"

import './OfferList.css'

function OfferList({ setSelectedOffer }) {

    const { _id: session_id } = useSessionData()

    const [offersData, setOffersData] = useState([])

    useEffect(() => {
        getOffersData()
    }, [session_id])

    function getOffersData() {
        offerService
            .getAllOffers()
            .then(({ data }) => {
                const filteredOffers = data.filter(offer => {
                    return offer.owner === session_id
                });
                setOffersData(filteredOffers)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="offerList__container">
            {offersData.map((offer) => {
                return (
                    <div key={offer._id}>
                        <button onClick={() => { setSelectedOffer(offer) }} key={offer._id} className="offerList__button">
                            <PreviewCard__Offer offerData={offer} />
                        </button>
                        <MyButton text="Update Offer" link={`/offer/editoffer/${offer._id}`} className="previewCard__offer" />
                    </div>
                )
            })}
        </div>

    )
}

export default OfferList