import React, { Component } from 'react';
import "./PlaceOrder.scss"
import ClearCartBtn from "../../../components/atoms/ClearCartBtn/clearCartBtn.js";
import CheckoutCart from "../molecules/CheckoutCart/CheckoutCart";


class PlaceOrder extends Component {
    
    render() { 
        return (
            <div className="placeOrderSection">
                <div className="placeOrderHeader">
                    <p>Place Order</p>
                </div>
                <div className="timeToDeliver">
                    <p>Delivery in 8 minutes</p>
                    <p id="totalItems">{Object.keys(this.props.cart).length} items</p>
                </div>
                <ClearCartBtn clearCartHandler={this.props.clearCartHandler}/>
                {Object.keys(this.props.cart).length == 0? <p className="EmptyCartMsg">No items to show</p> : <CheckoutCart cart={this.props.cart} removeItemFromCart={this.props.removeItemFromCart} increaseProductUnit={this.props.increaseProductUnit} decreaseProductUnit={this.props.decreaseProductUnit}/>}
            </div>

        );
    }
}
 
export default PlaceOrder;