import React, { Component } from 'react';

import "./productItem.scss"

import freshIcon from "../../../../../assets/Images/fresh_icon.png";
import IncDecBtn from '../../../../../components/IncDecBtn/incDecBtn';
import AddBtn from '../../../../../components/AddBtn/addBtn';
import calculateDiscountPercentage from '../../../../../components/Helper/calculateDiscountPercent';



class ProductItem extends Component {
    constructor(props)
    {
        super(props)
    }
    renderAddBtn(cart,productName,addToCartHandler,increaseProductUnit,decreaseProductUnit,id)
    {
       
        return (cart[productName] && cart[productName] >  0 ) ?
         <IncDecBtn 
                            productName={productName} 
                             cart={cart} 
                             id={id}
                             increaseProductUnit={increaseProductUnit}
                             decreaseProductUnit={decreaseProductUnit}/> :
    
         <AddBtn 
            productName={productName} 
            cart={cart} id={id} addToCartHandler={addToCartHandler}/>
    }
    render() { 
        
        let {details, productImage,cart,
            //productData ,
            addToCartHandler, increaseProductUnit, decreaseProductUnit } =  this.props
        let {id , productName, amountInKg, newPrice, originalPrice} = this.props.details;
  
        return (
            <div className="productDetails" id={productName}>
                    <div className="offer">{calculateDiscountPercentage(newPrice,originalPrice)+"% OFF"}</div>
                    <div className="product">
                        <img src={productImage}></img>
                    </div>
                    <div>
                        <img src={freshIcon} width="10" height="10"></img>
                        <div>sourced at 5am</div>
                    </div>
                    <div>{productName}</div>
                    <div className="amountInKg">{amountInKg}</div>
                    <div className="priceDetailsAdd">
                        <div className="priceDetails">
                            <p className="newPrice">₹ {newPrice}</p>
                            <p className="originalPrice">₹ {originalPrice}</p>
                        </div>    
                          { this.renderAddBtn(cart,productName,addToCartHandler,increaseProductUnit,decreaseProductUnit,id) }                      
                    </div>
            </div>
        );
    }
}
 
export default ProductItem;