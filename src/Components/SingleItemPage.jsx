import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function getData(id){
    return fetch(`https://fakestoreapi.com/products/${id}`)
              .then(res=>res.json())
}




export default function SingleItemPage(){

    const [data, setData] = useState({});
    const params = useParams();

    useEffect(()=>{
        getData(params.id) 
           .then(res=>setData(res));
    },[params.id]);

    console.log(data)
    return(
        <div>{data.id}
            <img 
            style={{height:"200px", width:"300px"}}
            src={data.image}></img>
             <h4>{data.id}</h4>
             <h4>{data.title}</h4>
             <h4>{data.price}</h4>
             <Link to="/cart">
                <button>ADD TO CART</button>
             </Link>
        </div>
    )
}