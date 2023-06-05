import './Footer.css'
import FooterButton from '../FooterButton/FooterButton'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/auth.contexts';
import userService from '../../services/user.services';
import { useSessionData } from '../../utils/get-session-data';

import homeIcon from './FooterIcons/white-home.png'
import profileIcon from './FooterIcons/user.png'
import settingsIcon from './FooterIcons/settings.png'
import chatIcon from './FooterIcons/comment.png'

function Footer() {

    let { _id } = useSessionData()

    return (
        <footer>
            <FooterButton icon={homeIcon} link="/" className="footerButton" />
            <FooterButton icon={settingsIcon} link={``} className="footerButton" />
            <FooterButton icon={chatIcon} link={``} className="footerButton" />
            <FooterButton icon={profileIcon} link={`/user/${_id}`} className="footerButton" />
        </footer>
    )
}
export default Footer