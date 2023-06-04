import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom'
import './MyButton.css'

function MyButton({ text, link, className }) {
    return (
        <Button className={className}>
            <Link className={`${className}--link`} to={link}>
                <p>{text}</p>
            </Link>
        </Button>
    )
}

export default MyButton