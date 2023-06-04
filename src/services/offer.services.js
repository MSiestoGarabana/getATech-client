import axios from 'axios'

class OfferService{

    constructor(){
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}api/offers`
        })
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

    updateOffer(userData){
        let {_id} = userData
        return this.api.post(`${_id}/editOffer`, userData)
    }
}

const offerService = new OfferService()

export default offerService