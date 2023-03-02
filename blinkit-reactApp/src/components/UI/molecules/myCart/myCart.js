import React, { Component } from 'react';
import MyCartBtn from "../../atoms/Cart/myCartBtn.js"
import "./myCart.css"
import calculate from '../../../helper/helper.js';
class MyCart extends Component {

    renderCartItemInfo(cart)
    {
        
        
        if(Object.keys(cart).length == 0)
            return "My Cart"
        else{
            let {totalProducts, totalAmount} = calculate(cart);
            return (
                <>
                    <p>{totalProducts} items</p>
                    <p>₹{totalAmount}</p>
                </>
            )

        }
            
    }


    render() { 
        return (
            <div className="cartMyCart">
                <MyCartBtn/>
                <a href="checkout.html" id="myCart">
                    {this.renderCartItemInfo(this.props.cart)}
                </a>
            </div>
        );
    }
}
 
export default MyCart;