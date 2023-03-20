import React, { Component } from 'react';
import "./PlaceOrder.scss"
import ClearCartBtn from "./molecules/ClearCartBtn/clearCartBtn.js";
import CheckoutCart from "../molecules/CheckoutCart/CheckoutCart";
import calculateItems from '../../Helper/calculateItems';


class PlaceOrder extends Component {
    render() { 
        return (
            <div className="placeOrderSection">
                <div className="placeOrderHeader">
                    <p>Place Order</p>
                </div>
                <div className="timeToDeliver">
                    <p>Delivery in 8 minutes</p>
                    <p id="totalItems">{calculateItems(this.props.cart)} items</p>
                </div>
                <ClearCartBtn clearCartHandler={this.props.clearCartHandler}/>
                {Object.keys(this.props.cart).length == 0? <p className="EmptyCartMsg">No items to show</p> : <CheckoutCart cart={this.props.cart} removeItemFromCart={this.props.removeItemFromCart} increaseProductUnit={this.props.increaseProductUnit} decreaseProductUnit={this.props.decreaseProductUnit}/>}
            </div>

        );
    }
}
 
export default PlaceOrder;