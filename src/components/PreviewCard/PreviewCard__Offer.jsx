import './PreviewCard.css'
import MyButton from '../MyButton/MyButton'

function PreviewCard__Offer({ offerData }) {
    return (
        <div className="previewCard__container">
            <div className='previewCard'>
                <img src={offerData.image} className='previewCard__image'></img>
                <div className='previewCard__container--info'>
                    <h1>{offerData.position}</h1>
                </div>
            </div>

        </div>
    )
}
export default PreviewCard__Offer