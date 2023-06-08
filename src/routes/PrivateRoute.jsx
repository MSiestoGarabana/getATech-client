import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/auth.contexts"
import { Navigate, Outlet } from "react-router-dom"
import Loader from './../components/Loader/Loader'

function PrivateRoute() {
    const { user, isLoading } = useContext(AuthContext);
    const [shouldRedirect, setShouldRedirect] = useState(false);

    useEffect(() => {
        if (!user) {
            const timer = setTimeout(() => {
                setShouldRedirect(true);
            }, 1000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [user]);

    if (isLoading) {
        return <Loader />;
    }

    if (shouldRedirect) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
}

export default PrivateRoute