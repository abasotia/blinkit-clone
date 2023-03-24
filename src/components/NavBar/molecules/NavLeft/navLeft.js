import React from "react";
import { Component } from "react";
import "./navLeft.css"
import DeliveryInfo from "./atoms/DeliveryInfo/DeliveryInfo.js";
import BlinkitLogo from "./atoms/blinkitLogo/blinkitLogo.js"


class NavLeft extends Component {
    render()
    {
        console.log("Nav left is re-rendered")
        return(
            <div className="navLeft">
               <BlinkitLogo/>
               <DeliveryInfo/>
            </div>
        );
    }
}

export default NavLeft;