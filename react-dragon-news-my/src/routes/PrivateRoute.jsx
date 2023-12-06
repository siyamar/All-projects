import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location =useLocation();
    console.log(location.pathname)

    if(loading){
        return <div className="flex item-center relative"><span className="top-[300px] left-[550px] absolute loading loading-dots loading-lg"></span></div>
    }

    if(user){
        return children
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;