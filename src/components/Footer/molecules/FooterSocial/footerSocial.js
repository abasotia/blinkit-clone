import React, { Component } from 'react';
import "./footerSocial.scss"
<<<<<<< HEAD
import appStore from "../../../../assets/Images/appStore.webp";
import googlePlay from "../../../../assets/Images/googlePlay.webp"
import twitter from "../../../../assets/Images/twitter.webp"
import instagram from "../../../../assets/Images/instagram.webp"
import linkedin from "../../../../assets/Images/linkedin.webp"
import facebook from "../../../../assets/Images/facebook.webp"
=======
import appStore from "../../../../assets/images/appStore.webp";
import googlePlay from "../../../../assets/images/googlePlay.webp"
import twitter from "../../../../assets/images/twitter.webp"
import instagram from "../../../../assets/images/instagram.webp"
import linkedin from "../../../../assets/images/linkedin.webp"
import facebook from "../../../../assets/images/facebook.webp"
>>>>>>> 01e787cf (20-March)

class FooterSocial extends Component {
    render() { 
        return (
            <div className="footerSocial">
                <div className="footerItems">
                 &copy; Blinkit Commerce Private Limited (formerly known as Grofers India Privated Limited), 2016-2023
                </div>
                <div className="footerItems">
                    <p>Download App</p>
                    <img className="downloads" src={appStore}></img>
                    <img className="downloads" src={googlePlay}></img>
                </div>
                <div className="footerItems">
                    <img className="socials" src={instagram}></img>
                    <img className="socials" src={facebook}></img>
                    <img className="socials" src={twitter}></img>
                    <img className="socials" src={linkedin}></img>
                </div>
            </div>
        );
    }
}
 
export default FooterSocial;

