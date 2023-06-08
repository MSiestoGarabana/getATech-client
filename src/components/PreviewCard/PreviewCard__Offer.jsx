import MyButton from '../MyButton/MyButton'
import { useNavigate } from 'react-router-dom'
import offerService from '../../services/offer.services'
import deleteIcon from './PreviewCardIcons/deleteIcon.png'
import editIcon from './PreviewCardIcons/editIcon.png'

import './PreviewCard.css'

function PreviewCard__Offer({ offer, selectedOffer, setSelectedOffer, handleDeleteOffer, getOffersData }) {

    let navigate = useNavigate()
    console.log("SELECTED OFFER FROM OFFER CARD", selectedOffer)

    function handleDeleteOffer(offer_id) {
        offerService
            .deleteOffer(offer_id)
            .then(getOffersData())
            .catch(err => console.log(err))
    }


    let isSelected = offer === selectedOffer

    return (
        <>
            <button onClick={() => setSelectedOffer(offer)} className='previewCard'>
                <img src={offer.image} className='previewCard__image'></img>
                <div className='previewCard__container--text'>
                    <p>{offer.position}</p>
                </div>
            </button>
            {
                isSelected && <>
                    <button onClick={() => navigate(`/offer/editoffer/${offer._id}`)} className="previewCard__button--editOffer">
                        <img className='previewCard__img--edit' src={editIcon} />
                    </button>
                    <button onClick={() => handleDeleteOffer(offer._id)} className="previewCard__button--deleteOffer">
                        <img className='previewCard__img--edit' src={deleteIcon} />
                    </button>
                </>
            }

        </>

    )
}
export default PreviewCard__Offer