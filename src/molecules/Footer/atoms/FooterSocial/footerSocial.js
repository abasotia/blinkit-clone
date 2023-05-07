import React, { Component } from 'react';
import "./footerSocial.scss"
import {appStore, googlePlay, twitter, instagram, linkedin, facebook} from "./constants/footerSocialData";


class FooterSocial extends Component {
    render() { 
        console.log("Footer Social Rendered")
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

