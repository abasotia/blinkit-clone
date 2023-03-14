import React, { Component } from 'react';
import "./sideMenu.css"
import I1 from  "../../../../../assets/Images/FreshVegetables.jpeg";
import I2 from "../../../../../assets/Images/FreshFruits.jpeg";
import I3 from "../../../../../assets/Images/saladBar.jpeg";
import I4 from "../../../../../assets/Images/exotics.jpeg";
import I5 from "../../../../../assets/Images/Flowers&leaves.jpeg";
import I6 from "../../../../../assets/Images/FreshlyCutFruits&Sprouts.jpeg";
import I7 from "../../../../../assets/Images/Leafies&Herbs.png";



const sideMenuInfo = {

    "Fresh Vegetables": I1,
    "Fresh Fruits": I2,
    "Salad Bar": I3,
    "Exotics": I4,
    "Flowers & Leaves": I5,
    "Freshly Cut & Sprouts" : I6,
    "Leafies & Herbs": I7

}

// const sideMenuItem = sideLabel.map((item,index) => {
//     return (
//         <div className="sideLabelContainer" id={item} key={item+index}>
//             <div className="sideImgContainer"><img src={sideImg[index]} ></img></div>
//             <div className="label">{item}</div>
//         </div>
//     )
// })


class SideMenu extends Component {
  
    constructor(props)
    {
        super(props)
        this.sideMenu = []
        this.state = {
            selected : "Fresh Vegetables"
        }
    }
    handleClick(item)
    {
        this.setState({selected : item})
        console.log("Hello")
    }

    returnSideMenuItem(item,className)
    {
        return(
            <div onClick={()=> this.handleClick(item)} className={className} >
                <div className="sideImgContainer">
                    <img src={sideMenuInfo[item]}></img>
                </div>
                <div className="label">{item}</div>

            </div>
        )
    }

    render() { 
        this.sideMenu = [];
        for(let key in sideMenuInfo)
        {
            if(this.state.selected == key)
               this.sideMenu.push(this.returnSideMenuItem(key,"selectedSideMenuItem "+"sideMenuItemContainer"));
            else
              this.sideMenu.push(this.returnSideMenuItem(key,"sideMenuItemContainer"));
        }
        return (
            <div className='sideMenu'>
                {this.sideMenu}
            </div>

        );
    }
}
 
export default SideMenu;
