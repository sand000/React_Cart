import { useContext } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext"

export default function LoginPage(){

    const {isAuth, toggle} = useContext(AuthContext);
    const navigate= useNavigate();

    console.log(isAuth);
    const handleButton=(isAuth)=>{
        // isAuth=true;
         navigate("/shoppingcart")
        
    }
    
    return(
        <div>
            <h1>Login Page</h1>
            <button onClick={()=>handleButton(isAuth)}>Login</button>
        </div>
    )
}