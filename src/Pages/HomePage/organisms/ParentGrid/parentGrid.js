import React, { Component } from 'react';

import "./parentGrid.scss"

import GridHeader from "./molecules/GridHeader/gridHeader.js"
import MainGrid from '../MainGrid/mainGrid';

class ParentGrid extends Component {
    render() { 
        console.log("THE PARENT GRID")
        return (<div className="parentGrid">
            <GridHeader sortBy={this.props.sortBy}/>     
            <MainGrid cart={this.props.cart} 
            //productData={this.props.productData}
            productsDisplayed={this.props.productsDisplayed}
            addToCartHandler={this.props.addToCartHandler}
            increaseProductUnit={this.props.increaseProductUnit}
            decreaseProductUnit={this.props.decreaseProductUnit}
            />       
        </div>);
    }
}


 
export default ParentGrid;