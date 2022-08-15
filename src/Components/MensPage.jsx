import { useEffect } from "react";
import { useState } from "react"
import { Link } from "react-router-dom";

function getData(){
    return fetch(`https://fakestoreapi.com/products`)
              .then(res=>res.json())
}


export default function MensPage(){


    const [data, setData] = useState([]);

    useEffect(()=>{
        getData() 
           .then(res=>setData(res));
    },[]);

    return(
        <div>
            <h1>Men's Product</h1>
            {data.map((e)=>{
                return(
                    <div style={{border:"1px solid black"}}>
                       <div>
                       <Link to={`/singleitem/${e.id}`}><h4>{e.id}</h4></Link>
                       <img 
                        style={{height:"100px", width:"120px"}}
                       src={e.image}></img>
                       </div>

                        <div>
                           <h4>{e.title}</h4>
                           <h4>{e.price}</h4>
                           <h4>{e.category}</h4>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}