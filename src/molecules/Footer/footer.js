import React, { PureComponent } from 'react';

import "./footer.scss"

import FooterSection from './atoms/FooterSection/footerSection';
import FooterText from './atoms/FooterText/footerText';
import FooterSocial from './atoms/FooterSocial/footerSocial.js';



class Footer extends PureComponent {
    
    render() { 
        console.log("Footer rendered");
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