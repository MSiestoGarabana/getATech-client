import FooterButton from '../FooterButton/FooterButton'
import homeIcon from './FooterIcons/white-home.png'
import profileIcon from './FooterIcons/user.png'
import settingsIcon from './FooterIcons/settings.png'
import chatIcon from './FooterIcons/comment.png'
import './Footer.css'

function Footer({ sessionData }) {

    let { _id } = sessionData

    return (
        <footer>
            {sessionData?.role === 'EMPLOYEE' &&
                <div className='footer__container--buttons'>
                    <FooterButton icon={homeIcon} link="/homepage" className="footerButton" />
                    <FooterButton icon={settingsIcon} link={``} className="footerButton" />
                    <FooterButton icon={chatIcon} link={``} className="footerButton" />
                    <FooterButton icon={profileIcon} link={`/user/${_id}`} className="footerButton" />
                </div>
            }
            {sessionData?.role === 'EMPLOYER' &&
                <div className='footer__container--buttons'>
                    <FooterButton icon={homeIcon} link="/homepage" className="footerButton" />
                    <FooterButton icon={settingsIcon} link={``} className="footerButton" />
                    <FooterButton icon={profileIcon} link={`/user/${_id}`} className="footerButton" />
                </div>
            }
            {sessionData?.role === 'ADMIN' &&
                <div className='footer__container--buttons'>
                    <FooterButton icon={homeIcon} link="/homepage" className="footerButton" />
                </div>
            }
            {!sessionData.role &&
                <div className='footer__container--buttons'>
                    <FooterButton icon={homeIcon} link="/" className="footerButton" />
                </div >
            }
        </footer>
    )
}
export default Footer