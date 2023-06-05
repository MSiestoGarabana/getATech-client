import TinderCard from 'react-tinder-card'
import { useState, useEffect } from "react"
import userService from '../../../services/user.services'


function EmployeesSwipe({ setLastDirection }) {

    const [employeesData, setEmployeesData] = useState([])

    useEffect(() => {
        loadUsersData()
    }, [])

    function loadUsersData() {
        userService
            .getAllUsers()
            .then(({ data }) => {
                const filteredUsers = data.filter(user => user.role === 'EMPLOYEE');
                setEmployeesData(filteredUsers);
            })
            .catch(err => console.log(err))
    }



    const swiped = (direction, _id) => {
        console.log(direction)
        if (direction === "right") {

            offerService
                .updateOffer(_id)
                .then(offer => console.log())
                .catch(err => console.log(err))
        }

        console.log('removing: ' + _id)
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }

    return (
        <div>
            {employeesData ? (
                employeesData.map(elm => (
                    <TinderCard
                        className='swipe'
                        key={elm.username}
                        onSwipe={dir => swiped(dir, elm._id)}
                        onCardLeftScreen={() => outOfFrame(elm.username)}
                    >
                        <div
                            style={{ backgroundImage: `url(${elm.image})` }}
                            className='card'
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