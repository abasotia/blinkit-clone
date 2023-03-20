import React from "react";
import { Component } from "react";
import Dropdown from "../Dropdown/dropdown"
import cityLocations from "../../../../../../assets/Data/CityLocations";

import "./DeliveryInfo.scss";



class DeliveryInfo extends Component {
    render()
    {
        return(
            <div  className="timeLocation">
                <div className="deliveryTime">
                    Delivery in 8 minutes
                </div>
                <div className="deliveryLocation">
                    <Dropdown options={cityLocations} label="cities"/>
                </div>
            </div>
        );
    }
}

export default DeliveryInfo