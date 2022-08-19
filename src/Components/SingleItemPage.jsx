import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import cartData from "./Cart";
import Cart from "./Cart";
import {CartContext} from "../Contexts/CartContext";
import { useContext } from "react";

function getData(id){
    return fetch(`https://fakestoreapi.com/products/${id}`)
              .then(res=>res.json())
}


export default function SingleItemPage(){

    const [data, setData] = useState({});
    const params = useParams();
    const {cart, AddToCart} = useContext(CartContext);

    console.log(cart);
    useEffect(()=>{
        getData(params.id) 
           .then(res=>setData(res));
    },[params.id]);

    

    return(
        <div style={{border:"2px solid grey", 
            borderRadius:"1rem", height:"auto",
             width:"80%", margin:"auto", display:"flex", 
             justifyContent:"space-evenly",padding:"2rem"}}>
            <div>
                <img 
                style={{height:"200px", width:"300px"}}
                src={data.image}></img>
            </div>

            <div style={{width:"50%"}}>
                <h4>{data.id}</h4>
                <h4>{data.title}</h4>
                <h4>{data.price}</h4>
                <p>{data.description}</p>
            
                    <button onClick={()=>AddToCart(data)}>ADD TO CART</button>
            
             </div>
        </div>
    )
}