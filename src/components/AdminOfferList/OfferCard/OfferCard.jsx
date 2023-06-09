import deleteIcon from '../../PreviewCard/PreviewCardIcons/deleteIcon.png'
import './OfferCard.css'

function OfferCard({ offerData, selectedOffer, setSelectedOffer, handleDeleteOffer }) {

    let isSelected = selectedOffer === offerData

    let { _id: offer_id } = offerData

    return (
        <div onClick={() => setSelectedOffer(offerData)} className='offerCard__container--body'>
            <div >
                <img src={offerData.image} className='offerCard__img' />
            </div>
            <div className='offerCard__container--downSection'>
                {
                    isSelected && <>
                        <button onClick={() => handleDeleteOffer(offer_id)} className="offerCard__button--delete">
                            <img className='offerCard__icon--delete' src={deleteIcon} />
                        </button>
                    </>
                }
                {
                    !isSelected && <>
                        <button className="offerCard__button--delete">
                            <img className='offerCard__icon--delete'></img>
                        </button>
                    </>
                }
                <h5 className='offerCard__h3'>{offerData.position}</h5>
            </div>
        </div>
    )
}
export default OfferCard