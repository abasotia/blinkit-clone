import React, { Component } from 'react';

import "./CheckoutItem.scss"

import IncDecBtn from "../../../../../../molecules/IncDecBtn/incDec.js";
import RemoveBtn from "../RemoveBtn/removeBtn"

class CheckoutItem extends Component {
 
    render() { 
        

        console.log("PRODUCT ITEM COMPONENT", this.props.details )
        let {amountInKg, id, newPrice, originalPrice, productName} = this.props.details
       

        return (
            
            <div id={"itemAddedToCart"+id} 
                 className="itemAddedToCart"
                 >
                <div className="itemDetailCart">
                    <div className="itemImage">
                        <img src={this.props.image}></img>
                    </div>
                    <div className="itemPurchaseDetails">
                        <p>{productName}</p>
                        <p>{amountInKg}</p>
                        <p>
                            {"₹"+newPrice+" " }
                            <span className="oldPrice">{"₹"+originalPrice}</span>
                        </p>
                    </div>
                </div>
                <div className="wrapper">
                    <IncDecBtn cart={this
                    .props.cart} productName={productName}
                     increaseProductUnit={this.props.increaseProductUnit}
                     decreaseProductUnit={this.props.decreaseProductUnit}/>            
                    <RemoveBtn removeItemFromCart={this.props.removeItemFromCart}
                                productName={productName}/>
                </div>   
            </div>
        );
    }
}
 
export default CheckoutItem;