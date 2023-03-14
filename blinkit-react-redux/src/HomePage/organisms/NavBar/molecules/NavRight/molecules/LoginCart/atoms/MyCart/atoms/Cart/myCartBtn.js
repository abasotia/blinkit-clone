import React, { Component } from 'react';
import cartImg from "../../../../../../../../../../../assets/Images/cart.png"
import "./myCartBtn.scss"
class MyCartBtn extends Component {
    render() { 
        return (
            <div id="myCartContainer">
                <img src={cartImg}></img>
            </div>
        );
    }
}
 
export default MyCartBtn;