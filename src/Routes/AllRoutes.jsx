import { Route, Routes } from "react-router-dom";
import AboutUs from "../Components/AboutUs";
import BoysPage from "../Components/BoysPage";
import Cart from "../Components/Cart";
import ContactUs from "../Components/ContactUs";
import Electronics from "../Components/Electronics";
import Faq from "../Components/Faq";
import GirlsPage from "../Components/GirlsPage";
import Home from "../Components/Home";
import Household from "../Components/Household";
import JobOpp from "../Components/JobOpp";
import LoginPage from "../Components/LoginPage";
import MensPage from "../Components/MensPage";
import WomensPage from "../Components/WomensPage";

export default function AllRoutes(){
    return(
        <div>
            <Routes>
                <Route path="/Home" element={<Home />}></Route>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path="/boyspage" element={<BoysPage />}></Route>
                <Route path="/electronics" element={<Electronics />}></Route>
                <Route path="/girlspage" element={<GirlsPage />}></Route>
                <Route path="/household" element={<Household />}></Route>
                <Route path="/menspage" element={<MensPage />}></Route>
                <Route path="/womenspage" element={<WomensPage />}></Route>

                <Route path="/aboutus" element={<AboutUs/>}></Route>
                <Route path="/contactus" element={<ContactUs />}></Route>
                <Route path="/faq" element={<Faq />}></Route>
                <Route path="/jobopp" element={<JobOpp />}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
            </Routes>
        </div>
    )
}