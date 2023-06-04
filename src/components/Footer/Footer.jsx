import './Footer.css'
import CustomButton from '../CustomButton/CustomButton'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/auth.contexts';
import userService from '../../services/user.services';
import getSessionData from '../../utils/get-session-data';

import homeIcon from './FooterIcons/white-home.png'
import profileIcon from './FooterIcons/user.png'
import settingsIcon from './FooterIcons/settings.png'
import chatIcon from './FooterIcons/comment.png'

function Footer() {

    let { _id } = getSessionData()

    return (
        <footer>
            <CustomButton icon={homeIcon} link="/" className="footerButton" />
            <CustomButton icon={settingsIcon} link={``} className="footerButton" />
            <CustomButton icon={chatIcon} link={``} className="footerButton" />
            <CustomButton icon={profileIcon} link={`/user/${_id}`} className="footerButton" />
        </footer>
    )
}
export default Footer