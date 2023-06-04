import axios from 'axios'

class UserService{

    constructor(){

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}api/user`
        })

        this.api.interceptors.request.use((config) => {
 
            const storedToken = localStorage.getItem("authToken");
         
            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }
            return config
        })
    }

    getAllUsers(){
        return this.api.get('/getAllUsers')
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