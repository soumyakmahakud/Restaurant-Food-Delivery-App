"use client";


import { useState } from "react";
import RestaurantLogin from "../_components/RestaurantLogin.js";
import RestaurantSignup from "../_components/RestaurantSignup.js";
import RestaurantHeader from "../_components/RestaurantHeader.js";
import "./style.css";
import Footer from "../_components/Footer.js";

const Restaurant = () => {
    const [login, setLogin] = useState(true)
    return (
        <div className="container">
            <RestaurantHeader/>
            <h1>Restaurent Login/Signup Page</h1>
            {
                login ? <RestaurantLogin /> : <RestaurantSignup />
            }
            <div>
                <button className="button-link" onClick={() => setLogin(!login)}>
                    {login ? "Do not have Account? Signup" : "Already have an Account? Login"}
                </button>
            </div>
            <Footer/>
        </div>
    )
}
export default Restaurant;