import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

import welcomeImage from '../WelcomePage/Welcome image/welcomeImg.png'

import './WelcomePage.css'

function WelcomePage() {
    return (
        <div className="welcomePage__container--body">
            <img src={welcomeImage} className="welcomePage__img" />

            <div className="welcomePage__container--text">
                <h3>Get a tech</h3>
                <h3>Get a job</h3>
            </div>

            <div className="welcomePage__container--buttons">
                <Button id="welcomePage__button">
                    <Link className="welcomePage__link" to='/login'>
                        <p>Login</p>
                    </Link>
                </Button>
                <Button id="welcomePage__button">
                    <Link className="welcomePage__link" to='/signup'>
                        <p>SignUp</p>
                    </Link>
                </Button>
            </div>
        </div>
    )
}
export default WelcomePage