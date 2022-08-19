import { Children } from "react";
import { useContext } from "react"
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext"

export default function PrivateRoute({children}){

    const {isAuth} = useContext(AuthContext);

    if(isAuth){
        <NavLink to="/login"></NavLink>
    }

    return Children;
}