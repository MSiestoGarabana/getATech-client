import TinderCard from 'react-tinder-card'
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import userService from '../../../services/user.services'
import { manageEmployerRightSwipe, manageNewDiscarded } from '../../../utils/swipe-utils'
import './EmployeesSwipe.css'


function EmployeesSwipe({ selectedOffer, setShowMatch }) {

    let { _id: offer_id } = selectedOffer

    const [employeesData, setEmployeesData] = useState([])


    useEffect(() => {
        loadEmployeesData()
    }, [offer_id])

    function loadEmployeesData() {

        userService
            .getAvailableEmployees(offer_id)
            .then(({ data }) => {
                setEmployeesData(data)
            })
            .catch(err => console.log(err))
    }

    const navigate = useNavigate()

    const swiped = (direction, employee) => {

        let { _id: employee_id } = employee

        if (direction === "right") { manageEmployerRightSwipe(offer_id, employee, setShowMatch, loadEmployeesData()) }
        if (direction === "left") { manageNewDiscarded(offer_id, employee, loadEmployeesData()) }
        if (direction === "up" || direction === "down") { navigate(`/user/${employee_id}`) }

    }

    return (
        <>
            <p className='swipe__text--title'>{selectedOffer.position}</p>
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