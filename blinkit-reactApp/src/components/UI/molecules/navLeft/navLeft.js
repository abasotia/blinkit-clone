import React from "react";
import { Component } from "react";
import "./navLeft.css"
import TimeLocation from "../../atoms/timeLocation/timeLocation.js";
import BlinkitLogo from "../../atoms/blinkitLogo/blinkitLogo.js"

class NavLeft extends Component {
    render()
    {
        return(
            <div className="navLeft">
               <BlinkitLogo/>
               <TimeLocation/>
            </div>
        );
    }
}

export default NavLeft;