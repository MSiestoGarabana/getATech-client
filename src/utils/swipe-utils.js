import offerService from "../services/offer.services"
function manageMatch(user, offer_id, employee) {
    if (user === "employer") {
        Promise.all([
            offerService.newMatch(offer_id, employee),
            offerService.newPreselected(offer_id, employee)
        ])
        .catch(err => console.log(err))
    }
    if(user === "employee") {
        Promise.all([
            offerService.newMatch(offer_id, employee),
            offerService.newApplicant(offer_id, employee)
        ])
        .catch(err => console.log(err))
    }
}

function manageNewPreselected(offer_id, employee) {
    offerService
        .newPreselected(offer_id, employee)
        .then(({ data }) => console.log("updatedOffer", data))
        .catch(err => console.log(err))
}

function manageNewDiscarded(offer_id, employee) {
    offerService
        .newDiscarded(offer_id, employee)
        .then(({ data }) => console.log("updatedDiscarded", data))
        .catch(err => console.log(err))
}

function manageNewApplicant(offer_id, employee){
    offerService
        .newApplicant(offer_id, employee)
        .then(offer => console.log(offer))
        .catch(err => console.log(err))
}

function manageEmployerRightSwipe(offer_id, employee) {

    let { _id: employee_id } = employee

    offerService
        .getOfferById(offer_id)
        .then(({ data: offer }) => {
            if (offer.applicants.includes(employee_id)) { manageMatch("employer", offer_id, employee) }
            if (!offer.applicants.includes(employee_id)) { manageNewPreselected(offer_id, employee) }
        })
        .catch(err => console.log(err))
}

function manageEmployeeRightSwipe(offer_id, employee) {

    let { _id: employee_id } = employee

    offerService
        .getOfferById(offer_id)
        .then(({ data: offer }) => {
            console.log(offer.preselecteds.includes(employee_id))
            console.log(!offer.preselecteds.includes(employee_id))
            if (offer.preselecteds.includes(employee_id)) {console.log("MATCH"), manageMatch("employee", offer_id, employee) }
            if (!offer.preselecteds.includes(employee_id)) { manageNewApplicant(offer_id, employee) }
        })
        .catch(err=>console.log(err))

}

export {
    manageMatch,
    manageNewPreselected,
    manageNewDiscarded,
    manageNewApplicant,
    manageEmployerRightSwipe,
    manageEmployeeRightSwipe
}