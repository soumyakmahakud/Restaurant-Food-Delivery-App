"use client";


import { useState } from "react";
import RestaurantLogin from "../_components/restaurantLogin.js";
import RestaurantSignup from "../_components/restaurantSignup.js";
import RestaurantHeader from "../_components/RestaurantHeader.js";
import "./style.css";
import RestaurantFooter from "../_components/RestaurantFooter.js";

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
            <RestaurantFooter/>
        </div>
    )
}
export default Restaurant;