import TinderCard from 'react-tinder-card'
import { useState, useEffect, useRef } from "react"
import userService from '../../../services/user.services'
import offerService from '../../../services/offer.services'
import { manageEmployerRightSwipe, manageNewDiscarded } from '../../../utils/swipe-utils'
import './EmployeesSwipe.css'


function EmployeesSwipe({ offer_id, session_id, setShowMatch }) {

    const [employeesData, setEmployeesData] = useState([])

    useEffect(() => {

        loadEmployeesData()

    }, [offer_id])

    function loadEmployeesData() {

        userService
            .getAllUsers()
            .then(({ data }) => {
                const filteredUsers = data.filter(user => user.role === 'EMPLOYEE');
                setEmployeesData(filteredUsers);
            })
            .catch(err => console.log(err))

    }

    const swiped = (direction, employee) => {

        if (direction === "right") { manageEmployerRightSwipe(offer_id, employee, setShowMatch) }
        if (direction === "left") { manageNewDiscarded(offer_id, employee) }
        if (direction === "up" || direction === "down") { console.log("detalles de la oferta") }

    }

    return (
        <>
            {employeesData ? (
                employeesData.map(employee => (
                    <TinderCard
                        className='employeesSwipe'
                        id='swipe'
                        key={employee.username}
                        onSwipe={dir => swiped(dir, employee)}
                        onCardLeftScreen={() => outOfFrame(employee.username)}
                    >
                        <div
                            style={{ backgroundImage: `url(${employee.image})` }}
                            className='employeeCard'
                        >
                            <h3>{employee.username}</h3>
                        </div>
                    </TinderCard>
                ))
            ) : (
                <h1>Cargando</h1>
            )}
        </>
    );
}
export default EmployeesSwipe