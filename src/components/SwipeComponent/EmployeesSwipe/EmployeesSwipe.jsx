import TinderCard from 'react-tinder-card'
import { useState, useEffect, useRef } from "react"
import userService from '../../../services/user.services'
import offerService from '../../../services/offer.services'
import './EmployeesSwipe.css'


function EmployeesSwipe({ offer_id, session_id }) {
    console.log("Offer id", offer_id)

    const employeesDataRef = useRef([])
    const [employeesData, setEmployeesData] = useState([])

    useEffect(() => {
        if (employeesDataRef.current.length === 0) {
            loadEmployeesData()
        } else {
            setEmployeesData(employeesDataRef.current)
        }
    }, [offer_id])

    function loadEmployeesData() {
        userService
            .getAllUsers()
            .then(({ data }) => {
                const filteredUsers = data.filter(user => user.role === 'EMPLOYEE');
                employeesData.current = filteredUsers
                setEmployeesData(filteredUsers);
            })
            .catch(err => console.log(err))
    }

    const swiped = (direction, elm) => {

        let userData = elm
        console.log("EMPLOYE DATAAAAA", userData)

        if (direction === "right") {
            offerService
                .getOfferById(offer_id)
                .then(({ data }) => {
                    if (data.applicants.includes(userData._id)) {
                        alert("MATCH")
                    }
                    return data
                })
                .then(
                    offerService
                        .newPreselected(offer_id, userData)
                        .then(({ data }) => console.log("updatedOffer", data))
                        .catch(err => console.log(err))
                )


        }

    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }

    return (
        <div className='employeesSwipe__container'>
            {employeesData ? (
                employeesData.map(elm => (
                    <TinderCard
                        className='swipe'
                        id='swipe'
                        key={elm.username}
                        onSwipe={dir => swiped(dir, elm)}
                        onCardLeftScreen={() => outOfFrame(elm.username)}
                    >
                        <div
                            style={{ backgroundImage: `url(${elm.image})` }}
                            className='card'
                            id='card'
                        >
                            <h3>{elm.username}</h3>
                        </div>
                    </TinderCard>
                ))
            ) : (
                <h1>Cargando</h1>
            )}
        </div>
    );
}
export default EmployeesSwipe