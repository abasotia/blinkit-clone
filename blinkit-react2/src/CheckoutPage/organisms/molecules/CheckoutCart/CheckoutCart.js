import React, { Component } from 'react';
import ProductData from "../../../../assets/Data/ProductData.js";
import ProductImages from "../../../../assets/Data/ProductImages.js";
import CheckoutItem from "../atoms/CheckoutItem/CheckoutItem";
import "./CheckoutCart.scss";

class CheckoutCart extends Component {   

    renderCheckoutItems(cartProducts)
    {
        return (cartProducts.map((product,index)=>{
            return (
                <CheckoutItem details={ProductData[product]} 
                                image={ProductImages[product]} 
                                cart={this.props.cart} 
                                removeItemFromCart={this.props.removeItemFromCart}
                                increaseProductUnit={this.props.increaseProductUnit}
                                decreaseProductUnit={this.props.decreaseProductUnit}
                />
            )
        }))
    }

    render() 
    { 
        let cartProducts = Object.keys(this.props.cart);
        return (
            <div className="itemsAddedToCart" id="iteamsAddedToCart">
               {this.renderCheckoutItems(cartProducts)}
            </div>
        );
    }
}
 
export default CheckoutCart;