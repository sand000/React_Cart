import { useState } from "react";
import { createContext } from "react";

export const CartContext =  createContext();

export default function CartContextProviderComp({children}){
    const [cart, setCart] = useState({cartItems:[],totalPrice:0,totalQty:0});
    // const toggle = ()=>setIsAuth(!isAuth);

    const AddToCart=(data)=>{
  
        setCart({cartItems:[...cart.cartItems,data],
                 totalPrice:cart.totalPrice+data.price,
                 totalQty:cart.totalQty+1
                })

    }
    return(
       <CartContext.Provider value={{cart, AddToCart}}>
         {children}
       </CartContext.Provider>
    )
}