import React, { Component } from 'react';
import "./sideMenu.css"
import I1 from  "../../../../assets/images/FreshVegetables.jpeg";
import I2 from "../../../../assets/images/FreshFruits.jpeg";
import I3 from "../../../../assets/images/saladBar.jpeg";
import I4 from "../../../../assets/images/exotics.jpeg";
import I5 from "../../../../assets/images/Flowers&leaves.jpeg";
import I6 from "../../../../assets/images/FreshlyCutFruits&Sprouts.jpeg";
import I7 from "../../../../assets/images/Leafies&Herbs.png";

const sideImg = [  I1,I2,I3,I4,I5,I6,I7];

const sideLabel = [
    "Fresh Vegetables",
    "Fresh Fruits",
    "Salad Bar",
    "Exotics",
    "Flowers & Leaves",
    "Freshly Cut & Sprouts",
    "Leafies & Herbs"
]

const sideMenuItem = sideLabel.map((item,index) => {
    return (
        <div key={item+index}>
            <div><img src={sideImg[index]} ></img></div>
            <div className="label">{item}</div>
        </div>
    )
})


class SideMenu extends Component {
    render() { 
        return (
            <div className='sideMenu'>
                {sideMenuItem}
            </div>

        );
    }
}
 
export default SideMenu;
