import TinderCard from 'react-tinder-card'
import { useState, useEffect, useRef } from "react"
import userService from '../../../services/user.services'
import offerService from '../../../services/offer.services'
import { manageEmployerRightSwipe, manageNewDiscarded } from '../../../utils/swipe-utils'
import './EmployeesSwipe.css'


function EmployeesSwipe({ offer, setShowMatch }) {
    let { _id: offer_id } = offer
    const [employeesData, setEmployeesData] = useState([])


    useEffect(() => {

        loadEmployeesData()

    }, [offer_id])

    function loadEmployeesData() {
        let usersInDiscarded = offer.discarded
        let usersInPreselected = offer.preselecteds

        userService
            .getAllUsers()
            .then(({ data }) => {
                const filteredUsers = data.filter(user => {
                    return (user.role === 'EMPLOYEE' &&
                        !usersInDiscarded.includes(user._id.toString()) &&
                        !usersInPreselected.includes(user._id.toString()))


                }
                );
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
            {employeesData ?
                (
                    employeesData.map((employee, i) => (
                        <TinderCard
                            className='employeesSwipe'
                            id='swipe'
                            key={i}
                            onSwipe={dir => swiped(dir, employee)}
                        >
                            <div style={{ backgroundImage: `url(${employee.image})` }} className='employeeCard'>
                                <h3>{employee.username}</h3>
                            </div>
                        </TinderCard>
                    ))
                )
                :
                (
                    <h1>Cargando</h1>
                )}
        </>
    );
}
export default EmployeesSwipe