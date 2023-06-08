import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import OffersSwipe from '../../components/SwipeComponent/OffersSwipe/OffersSwipe'
import './EmployeeHomePage.css'


function EmployeeHomePage({ session_id }) {

    const [showMatchModal, setShowMatchModal] = useState(false)

    return (
        <div className='employeeHomePage__container'>
            <Modal className='modal__match' show={showMatchModal} onHide={() => setShowMatchModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>MATCH!</Modal.Title>
                </Modal.Header>
            </Modal>
            <OffersSwipe session_id={session_id} setShowMatchModal={setShowMatchModal} />
        </div>
    );
}

export default EmployeeHomePage