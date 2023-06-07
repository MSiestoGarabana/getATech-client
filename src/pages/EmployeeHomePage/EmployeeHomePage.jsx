import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import OffersSwipe from '../../components/SwipeComponent/OffersSwipe/OffersSwipe'
import './EmployeeHomePage.css'


function EmployeeHomePage() {

    const [showMatchModal, setShowMatchModal] = useState(false)

    return (
        <div className='employeeHomePage__container'>
            <Modal className='modal__match' show={showMatchModal} onHide={() => setShowMatchModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>MATCH!</Modal.Title>
                </Modal.Header>
            </Modal>
            <OffersSwipe setShowMatchModal={setShowMatchModal} />
        </div>
    );
}

export default EmployeeHomePage