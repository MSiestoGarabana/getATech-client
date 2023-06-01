import axios from 'axios'

class UserService{

    constructor(){
        this.api = axios.create({
            baseURL: `${process.nextTick.REACT_APP_API_URL}api/user`
        })
    }

    userDelete(_id){
        return this.api.post(`/${_id}/delete`)
    }

    userUpdate(userData){
        let {_id} = userData
        return this.api.post(`${_id}/edit`)
    }

}

const userService = new UserService()

export default userService