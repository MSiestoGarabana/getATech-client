import TinderCard from 'react-tinder-card'
import { useState, useEffect, useRef } from "react"
import userService from '../../../services/user.services'
import offerService from '../../../services/offer.services'
import { manageEmployerRightSwipe, manageNewDiscarded } from '../../../utils/swipe-utils'
import './EmployeesSwipe.css'


function EmployeesSwipe({ selectedOffer, setShowMatch }) {

    let { _id: offer_id } = selectedOffer
    console.log("SELECTEDOFFERINSWIPE", selectedOffer.position)
    let { discarded: usersInDiscarded } = selectedOffer
    let { preselecteds: usersInPreselected } = selectedOffer

    const [employeesData, setEmployeesData] = useState([])


    useEffect(() => {
        loadEmployeesData()
    }, [])

    function loadEmployeesData() {

        userService
            .getAllUsers()
            .then(({ data: usersData }) => {

                const filteredUsers = usersData.filter(({ role: userRole, _id: user_id }) => {
                    return (userRole === 'EMPLOYEE' &&
                        !usersInDiscarded.includes(user_id) &&
                        !usersInPreselected.includes(user_id))
                }

                );
                setEmployeesData(filteredUsers);
            })
            .catch(err => console.log(err))

    }

    const swiped = (direction, employee) => {

        console.log(employee)
        if (direction === "right") { manageEmployerRightSwipe(offer_id, employee, setShowMatch) }
        if (direction === "left") { manageNewDiscarded(offer_id, employee) }
        if (direction === "up" || direction === "down") { console.log("detalles de la oferta") }

    }

    return (
        <>  <h2>{selectedOffer.position}</h2>
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