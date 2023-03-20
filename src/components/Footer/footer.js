import React, { Component } from 'react';
import FooterSection from './molecules/FooterSection/footerSection';
import FooterText from './molecules/FooterText/footerText';
import FooterSocial from './molecules/FooterSocial/footerSocial.js';
import "./footer.scss"


class Footer extends Component {
    
    render() { 
        return (
            <>
                <FooterSection/>
                <FooterText/>
                <FooterSocial/>
            </>
        );
    }
}
 
export default Footer;