import './Footer.css'
import FooterButton from '../FooterButton/FooterButton'

import homeIcon from './FooterIcons/white-home.png'
import profileIcon from './FooterIcons/user.png'
import settingsIcon from './FooterIcons/settings.png'
import chatIcon from './FooterIcons/comment.png'

function Footer({ sessionData }) {
    console.log("sessionData from footer", sessionData)

    return (
        <footer>
            {sessionData?.role === 'EMPLOYEE' &&
                <>
                    <FooterButton icon={homeIcon} link="/homepage" className="footerButton" />
                    <FooterButton icon={settingsIcon} link={``} className="footerButton" />
                    <FooterButton icon={chatIcon} link={``} className="footerButton" />
                    <FooterButton icon={profileIcon} link={`/profile`} className="footerButton" />
                </>
            }
            {sessionData?.role === 'EMPLOYER' &&
                <>
                    <FooterButton icon={homeIcon} link="/homepage" className="footerButton" />
                    <FooterButton icon={settingsIcon} link={``} className="footerButton" />
                    <FooterButton icon={profileIcon} link={`/profile`} className="footerButton" />
                </>
            }
            <>
                <FooterButton icon={homeIcon} link="/" className="footerButton" />
            </>


        </footer>
    )
}
export default Footer