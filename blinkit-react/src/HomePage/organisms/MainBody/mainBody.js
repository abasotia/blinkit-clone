import React, { Component } from 'react';
import "./mainBody.scss"
import SideMenu from "./molecules/SideMenu/sideMenu.js"
import ParentGrid from '../ParentGrid/parentGrid';




class MainBody extends Component {
    
    render() { 
        return (
            <div className="mainBody">
                <SideMenu/>
                
                <ParentGrid cart={this.props.cart} 
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