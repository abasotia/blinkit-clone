import React, { PureComponent } from 'react';

import "./footer.scss"

import FooterSection from './molecules/FooterSection/footerSection';
import FooterText from './molecules/FooterText/footerText';
import FooterSocial from './molecules/FooterSocial/footerSocial.js';



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