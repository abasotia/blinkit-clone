import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import blinkitLogo from "./image/Screenshot.png"
import "./blinkitLogo.scss";



class BlinkitLogo extends Component {
    render()
    {
        console.log("Blikit Logo is renedered");
        return(
            <div className="blinkitLogo">
                <Link  to="/">
                    <img id="blinkit-logo" src={blinkitLogo}/>
                </Link>
            </div>
        );
    }
}

export default BlinkitLogo