import React, { Component } from 'react';
import "./mainBody.scss"
import SideMenu from "./molecules/SideMenu/sideMenu.js"
import ParentGrid from '../ParentGrid/parentGrid';




class MainBody extends Component {
    
    render() { 
        console.log("In Main Body", this.props.productData)
        return (
            <div className="mainBody">
                <SideMenu/>
                
                <ParentGrid cart={this.props.cart} 
                        //productData={this.props.productData}
                        productsDisplayed={this.props.productsDisplayed}
                        addToCartHandler={this.props.addToCartHandler}
                        increaseProductUnit={this.props.increaseProductUnit}
                        decreaseProductUnit={this.props.decreaseProductUnit}
                        sortBy={this.props.sortBy}
                        />
            </div>
        );
    }
}
 
export default MainBody;