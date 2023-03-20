import React from "react";
import { Component } from "react";
import "./navLeft.scss"
import BlinkitLogo from "./atoms/blinkitLogo/blinkitLogo.js"
import DeliveryInfo from "./atoms/DeliveryInfo/deliveryInfo.js";

class NavLeft extends Component {
    render()
    {
        return(
            <div className="navLeft">
               <BlinkitLogo/>
               <DeliveryInfo/>
            </div>
        );
    }
}

export default NavLeft;