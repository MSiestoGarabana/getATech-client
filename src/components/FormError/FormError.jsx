import { Alert } from "react-bootstrap"
function FormError({ children }) {
    return (
        <Alert variant={'danger'} style={{ textAlign: 'center', fontSize: '.8em' }}>
            {children}
        </Alert>
    )
}
export default FormError