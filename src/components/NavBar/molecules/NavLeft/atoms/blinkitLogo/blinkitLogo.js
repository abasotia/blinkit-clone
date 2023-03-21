import React from "react";
import { Component } from "react";
<<<<<<< HEAD
import image from "../../../../../../assets/Images/Screenshot.png";
import "./blinkitLogo.scss";
=======
import blinkitLogo from "../../../../../../assets/images/Screenshot.png"
import "./blinkitLogo.css";
>>>>>>> 01e787cf (20-March)



class BlinkitLogo extends Component {
    render()
    {
        return(
            <div className="blinkitLogo">
                <a href="index.html">
                    <img id="blinkit-logo" src={blinkitLogo}/>
                </a>
            </div>
        );
    }
}

export default BlinkitLogo