import React, { Component } from 'react';
import "./mainGrid.scss";
import ProductData from '../../../assets/Data/ProductData.js';

import ProductImages from '../../../assets/Data/ProductImages.js';
import ProductItem from '../ParentGrid/molecules/ProductItem/productItem.js'


        


class MainGrid extends Component {    
    constructor(props)
    {
        super(props);
    }

    renderProductDetails(cart,
        //productData,
        productsDisplayed ,addToCartHandler, increaseProductUnit, decreaseProductUnit)
    {
       
        const grid = productsDisplayed.map((product) =>{
             
            return <ProductItem 
                    details={product} 
                    productImage={ProductImages[product.productName]} 
                    cart={cart}
                    //productData={productData}
                    addToCartHandler={addToCartHandler}
                    increaseProductUnit={increaseProductUnit}
                    decreaseProductUnit={decreaseProductUnit}
                    />
        })

        return grid
    }

    render() { 
            console.log("THIS IS THE MAIN GRID")
            let {cart,productData,productsDisplayed ,addToCartHandler, increaseProductUnit, decreaseProductUnit} = this.props
        return (
            <div className="mainGridContainer" id="mainGridContainer">
           
               
             {  this.renderProductDetails(cart,productsDisplayed,addToCartHandler,increaseProductUnit, decreaseProductUnit) }
              
            </div>
        )
    }
}
 
export default MainGrid;