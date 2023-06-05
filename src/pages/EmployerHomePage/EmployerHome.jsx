import offerService from "../../services/offer.services"
import OfferList from '../../components/List_Offer/OfferList'
import UserDetailComponent from "../../components/UserDetailComponent/UserDetailComponent"
import MyButton from "../../components/MyButton/MyButton"

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