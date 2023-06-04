import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom'
import './CustomButton.css'

function CustomButton({ icon, link, className }) {
    return (
        <Button className={className}>
            <Link className={`${className}__link`} to={link}>
                <img src={icon}></img>
            </Link>
        </Button>
    )
}

export default CustomButton