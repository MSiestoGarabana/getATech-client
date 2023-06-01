import axios from 'axios'

class UserService{

    constructor(){
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}api/user`
        })
    }

    getAllUsers(){
        return this.api.get('/allUsers')
    }

    getUserById(id){
        return this.api.get(`/${id}`)
    }

    userDelete(_id){
        return this.api.post(`/${_id}/delete`)
    }

    userUpdate(userData){
        let {_id} = userData
        return this.api.post(`${_id}/edit`, userData)
    }

}

const userService = new UserService()

export default userService