import React, { Component } from 'react';
import IncDecBtn from "../../../../../components/atoms/IncDecBtn/incDec";
import RemoveBtn from "../../../../../components/atoms/RemoveBtn/removeBtn"
import "./CheckoutItem.scss"
class CheckoutItem extends Component {
 
    render() { 

        let {id, productName, amountInKg, newPrice, originalPrice} = this.props.details
       

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