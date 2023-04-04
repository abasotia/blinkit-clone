import React, { Component } from 'react';
import cartIcon from "../../../../../../assets/Images/cart.png"
import "./cartBtn.scss"
import calculateItems from '../../../../../Helper/calculateItems';
import calculateAmount from '../../../../../Helper/calculateAmount';
class MyCart extends Component {

    renderCartItemInfo(cart)
    {
        
        
        if(Object.keys(cart).length == 0)
            return "My Cart"
        else{
           let totalProducts = calculateItems(cart);
           let totalAmount = calculateAmount(cart);
            return (
                <>
                    <p>{totalProducts} items</p>
                    <p>₹{totalAmount}</p>
                </>
            )

        }
            
    }


    render() { 
        console.log("Cart Btn is rendered");
        return (
            <div className="cartBtn">
                <div id="cartIconContainer">
                    <img src={cartIcon}></img>
                </div>
                <a href="checkout.html" id="myCart">
                   {this.renderCartItemInfo(this.props.cart)}
                </a>
            </div>
        );
    }
}
 
export default MyCart;