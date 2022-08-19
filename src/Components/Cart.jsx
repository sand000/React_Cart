import { useEffect } from "react";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";
import { CartContext } from "../Contexts/CartContext";


 export default function Cart(){

    const {isAuth} = useContext(AuthContext);
    const {cart} = useContext(CartContext);
    const navigate= useNavigate();

    console.log(isAuth);

   if(isAuth){
    return navigate("/login")
   }
    return(

        <div>
            <h1>Cart</h1>
        <div style={{border:"2px solid grey", 
                    borderRadius:"1rem", height:"auto",
                     width:"80%", margin:"auto",  
                     justifyContent:"space-evenly",padding:"2rem"}}>

            {cart.cartItems.map((e)=>{
                return(
                   <div style={{border:"1px solid grey",display:"flex", justifyContent:"space-evenly" }}>
                    <div>
                        <img 
                        style={{height:"200px", width:"300px"}}
                        src={e.image}></img>
                    </div>
        
                    <div style={{width:"50%"}}>
                        <h4>{e.id}</h4>
                        <h4>{e.title}</h4>
                        <h4>{e.price}</h4>
             
                     </div>
                </div>
                )
            })}
      </div>

        <br></br>
         <div style={{border:"1px solid black", width:"90%",margin:"auto", display:"flex", justifyContent:"space-evenly"}}>
            <h3>Total Quantity : {cart.totalQty}</h3>
            <h3>Total Price : {cart.totalPrice}</h3>
         </div>
      </div>
    )
}