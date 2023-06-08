import TinderCard from 'react-tinder-card'
import { useState, useEffect, useRef } from "react"
import userService from '../../../services/user.services'
import offerService from '../../../services/offer.services'
import { manageEmployerRightSwipe, manageNewDiscarded } from '../../../utils/swipe-utils'
import './EmployeesSwipe.css'


function EmployeesSwipe({ setShowMatch, offer }) {

    let { _id: offer_id } = offer
    console.log("SELECTEDOFFERINSWIP", offer.position)
    let { discarded: usersInDiscarded } = offer
    let { preselecteds: usersInPreselected } = offer

    const [employeesData, setEmployeesData] = useState([])


    useEffect(() => {
        loadEmployeesData()
    }, [])

    function loadEmployeesData() {

        userService
            .getAllUsers()
            .then(({ data }) => {
                const filteredUsers = data.filter(({ role, _id }) => {
                    return (role === 'EMPLOYEE' &&
                        !usersInDiscarded.includes(_id) &&
                        !usersInPreselected.includes(_id))
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