import React, { Component } from 'react';
import "./parentGrid.css"
import GridHeader from "../../atoms/GridHeader/gridHeader.js"
import MainGrid from '../../molecules/MainGrid/mainGrid';

class ParentGrid extends Component {
    render() { 
        return (<div className="parentGrid">
            <GridHeader/>     
            <MainGrid cart={this.props.cart} 
            productsDisplayed={this.props.productsDisplayed}
            addToCartHandler={this.props.addToCartHandler}
            increaseProductUnit={this.props.increaseProductUnit}
            decreaseProductUnit={this.props.decreaseProductUnit}
            />       
        </div>);
    }
}
 
export default ParentGrid;