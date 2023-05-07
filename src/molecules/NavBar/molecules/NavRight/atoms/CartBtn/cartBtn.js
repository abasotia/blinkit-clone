import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {cartIcon} from "./constants/cartIcon"
import "./cartBtn.scss"
import calculateItems from '../../../../../../helper/calculateItems';
import calculateAmount from '../../../../../../helper/calculateAmount';
class MyCart extends Component {

    renderCartItemInfo(cart,productData)
    {
        
        
        if(!cart || Object.keys(cart).length == 0)
            return "My Cart"
        else{
           let totalProducts = calculateItems(cart);
           let totalAmount = calculateAmount(cart,productData);
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
            <div className="cartBtn">
                <div id="cartIconContainer">
                    <img src={cartIcon}></img>
                </div>
                <Link  to="/checkout" id="myCart">
                   {this.renderCartItemInfo(this.props?.cart, this.props?.productData)}
                </Link>
            </div>
        );
    }
}
 
export default MyCart;