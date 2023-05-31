import { createContext, useEffect, useState } from "react";
import authService from "../services/auth.services";

const AuthContext = createContext()

function AuthProviderWrapper(props) {

    const [user, setUser] = useState()

    const storeToken = token => {
        localStorage.setItem('authToken', token)
    }

    const logout = () => {
        setUser(null)
    }

    const authenticateUser = () => {

        const token = localStorage.getItem("authToken")

        if(token) {
            authService
            .verify(token)
            .then(({data}) => setUser(data))
            .catch(err => logout())
        }
    }

    useEffect(() => {
        authenticateUser()
    }, [])

    return(
            <AuthContext.Provider value={{ user, authenticateUser, storeToken, logout}}>
                {props.children}
            </AuthContext.Provider>
    )
}

export {AuthContext, AuthProviderWrapper}