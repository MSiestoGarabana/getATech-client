import MyButton from '../MyButton/MyButton'
import { useNavigate } from 'react-router-dom'

import './PreviewCard.css'

function PreviewCard__Offer({ offer, setSelectedOffer }) {

    let navigate = useNavigate()

    return (
        <>
            <button onClick={() => setSelectedOffer(offer)} className='previewCard'>
                <img src={offer.image} className='previewCard__image'></img>
                <div className='previewCard__container--text'>
                    <p>{offer.position}</p>
                </div>
            </button>
            <button onClick={() => navigate(`/offer/editoffer/${offer._id}`)} className="previewCard__button--editOffer">
                edit
            </button>
        </>

    )
}
export default PreviewCard__Offer