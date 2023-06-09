import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom'
import './FooterButton.css'

function FooterButton({ icon, link, className }) {
    return (
        <Button id={className}>
            <Link className={`${className}__link`} to={link}>
                <img className="footer__icon" src={icon}></img>
            </Link>
        </Button>
    )
}

export default FooterButton