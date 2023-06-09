import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

import welcomeImage from '../WelcomePage/Welcome image/welcomeImg.png'

import './WelcomePage.css'

function WelcomePage() {
    return (
        <div className="welcomePage__container--body">
            <img src={welcomeImage} className="welcomePage__img" />
            <Button id="welcomePage__button">
                <Link className="welcomePage__link" to='/login'>
                    <p>Login</p>
                </Link>
            </Button>
            <Button id="welcomePage__button">
                <Link className="welcomePage__link--signup" to='/signup'>
                    <p>SignUp</p>
                </Link>
            </Button>
        </div>
    )
}
export default WelcomePage