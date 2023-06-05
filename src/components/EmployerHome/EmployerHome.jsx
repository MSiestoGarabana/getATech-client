import offerService from "../../services/offer.services"
import OfferList from '../List_Offer/OfferList'
import UserDetailComponent from "../UserDetailComponent/UserDetailComponent"

function EmployerHomePage({ employerData }) {
    return (
        <>
            <OfferList />
            <UserDetailComponent userData={employerData} />
        </>
    )
}
export default EmployerHomePage

//<EmployeesSwipe setLastDirection={setLastDirection} />