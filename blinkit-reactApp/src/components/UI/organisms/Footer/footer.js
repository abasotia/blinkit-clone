import React, { Component } from 'react';
import FooterSection from '../../molecules/footerSection/footerSection';
import FooterText from '../../molecules/footerText/footerText';
import FooterSocial from '../../molecules/footerSocial/footerSocial.js';
import "./footer.css"


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