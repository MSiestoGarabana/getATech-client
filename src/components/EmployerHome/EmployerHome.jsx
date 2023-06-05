import offerService from "../../services/offer.services"
import OfferList from '../List_Offer/OfferList'
import UserDetailComponent from "../UserDetailComponent/UserDetailComponent"
import MyButton from "../MyButton/MyButton"

function EmployerHomePage({ employerData }) {
    return (
        <>
            <OfferList />
            <h1>Active Offers</h1>
            <MyButton text="Create Offer" link="/newOffer" className="ProfilePage__newOfferButton" />
            <UserDetailComponent userData={employerData} />
        </>
    )
}
export default EmployerHomePage

//<EmployeesSwipe setLastDirection={setLastDirection} />