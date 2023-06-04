import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom'
import './FooterButton.css'

function FooterButton({ icon, link, className }) {
    return (
        <Button className={className}>
            <Link className={`${className}__link`} to={link}>
                <img src={icon}></img>
            </Link>
        </Button>
    )
}

export default FooterButton