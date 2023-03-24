import React, { Component } from 'react';
import "./footerSection.css"
import I1 from "../../../../assets/Images/10_minute_delivery.png";
import I2 from "../../../../assets/Images/Best_Prices_Offers.png";
import I3 from "../../../../assets/Images/Wide_Assortment.png"

class FooterSection extends Component {
    render() { 
        console.log("Foooter Section Rendered");
        return (
            <div className="footerSection">
                <div className="services">
                    <img src={I1}></img>
                    <p className="sevicesHeader">Superfast Delivery</p>
                    <p className="servicesText">
                        Get your orders delivered at your doorstep at the earliest from dark stores near you
                    </p>
                </div>
                <div className="services">
                    <img src={I2}></img>
                    <p className="sevicesHeader">Best Prices & Offers</p>
                    <p className="servicesText">
                        Best price destination with offers directly from manufacturers
                    </p>
                </div>
                <div className="services">
                    <img src={I3}></img>
                    <p className="sevicesHeader">Wide Assortment</p>
                    <p className="servicesText">Choose from 5000+ products across food personal care household &amp; other categories</p>
                </div>
            </div>

        );
    }
}
 
export default FooterSection;