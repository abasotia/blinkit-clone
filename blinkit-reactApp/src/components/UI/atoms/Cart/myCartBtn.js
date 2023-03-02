import React, { Component } from 'react';
import cartImg from "../../../../assets/images/cart.png"
import "./myCartBtn.css"
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