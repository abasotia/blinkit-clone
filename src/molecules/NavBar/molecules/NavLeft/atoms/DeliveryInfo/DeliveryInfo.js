import React from "react";
import { Component } from "react";
import "./DeliveryInfo.scss";
import Dropdown from "../Dropdown/dropdown.js";
import cityLocations from "../../../../../../assets/Data/CityLocations";



class DeliveryInfo extends Component {
    render()
    {

        console.log("Delivery Info is re-rendered")
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