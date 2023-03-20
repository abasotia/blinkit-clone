import React from "react";
import { Component } from "react";
import image from "../../../../../../assets/Images/Screenshot.png";
import "./blinkitLogo.scss";



class BlinkitLogo extends Component {
    render()
    {
        return(
            <div className="blinkitLogo">
                <a href="index.html">
                    <img id="blinkit-logo" src={image}/>
                </a>
            </div>
        );
    }
}

export default BlinkitLogo