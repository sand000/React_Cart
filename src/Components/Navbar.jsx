import { Link } from "react-router-dom";
import  "../App.css"
import {FaShoppingCart } from "react-icons/fa";
export default function Navbar(){
    return(

        <div>
        <div style={{
            // backgroundColor:"#123964", 
                  display:"flex", 
                  justifyContent:"space-evenly",
                  height:"3rem",
             }}>
          
            <Link to="/Home">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/boyspage">Boys</Link>
            <Link to="/electronics">Electronics</Link>
            <Link to="/girlspage">Girls</Link>
            <Link to="/household">Household</Link>
            <Link to="/menspage">Mens</Link>
            <Link to="/womenspage">Womens</Link>
            <Link to="/cart"> <h3><FaShoppingCart/></h3> </Link>
            </div>
           <div style={{height:"250px"}}>
               <img style={{height:"200px",width:"80%", marginTop:"2rem"}} src={process.env.PUBLIC_URL+"/Banner.webp"}></img>
            </div>
        </div>
    )
}