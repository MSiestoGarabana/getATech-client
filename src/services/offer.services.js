import axios from 'axios'

class OfferService{

    constructor(){
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}api/offers`
        })
        this.api.interceptors.request.use((config) => {
 
            const storedToken = localStorage.getItem("authToken");
         
            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }
         
            return config
        })
    }

    createOffer(offerData){
        return this.api.post('/createOffer', offerData)
    }

    getAllOffers(){
        return this.api.get('/getAllOffers')
    }

    getOfferById(_id){
        return this.api.get(`/${_id}`)
    }

    deleteOffer(_id){
        return this.api.post(`/${_id}/deleteOffer`)
    }

    newApplicant(offer_id, userData){
        const {_id: user_id} = userData
        return this.api.post(`${offer_id}/newApplicant`, {user_id})
    }

    newPreselected(offer_id, userData){
        const {_id: user_id} = userData
        return this.api.post(`${offer_id}/newPreselected`, {user_id})
    }

    newDiscarded(offer_id, userData){
        console.log("user data in newDiscarded services",userData)
        const {_id: user_id} = userData
        return this.api.post(`${offer_id}/newDiscarded`, {user_id})
    }

    newMatch(offer_id, userData){
        const {_id: user_id} = userData
        return this.api.post(`${offer_id}/newMatch`, {user_id})
    }

    updateOffer(offerData){
        const {_id: offer_id} = offerData
        return this.api.post(`${offer_id}/editOffer`, offerData)
    }
}

const offerService = new OfferService()

export default offerService