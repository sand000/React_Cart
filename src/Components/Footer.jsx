import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <div style={{marginTop:"3rem"}}>Footer
            <div style={{display:"flex",justifyContent:"space-evenly"}}>
            <Link to="/aboutus">About Us</Link>
            <Link to="/contactus">Contact us</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/jobopp">JOb Opportunities</Link>
            {/* <Link to="/girlspage">Girls</Link> */}
            {/* <Link to="/household">Household</Link>
            <Link to="/menspage">Mens</Link>
            <Link to="/womenspage">Womens</Link> */}
            </div>
        </div>
    )
}