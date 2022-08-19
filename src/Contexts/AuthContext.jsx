import { useState } from "react";
import { createContext } from "react";

export const AuthContext =  createContext();

export default function AuthContextProviderComp({children}){
    const [isAuth, setIsAuth] = useState(false);
    const toggle = ()=>setIsAuth(!isAuth);

    return(
       <AuthContext.Provider value={{isAuth, toggle}}>
         {children}
       </AuthContext.Provider>
    )
}