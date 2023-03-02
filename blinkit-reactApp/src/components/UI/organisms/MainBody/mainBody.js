import React, { Component } from 'react';
import "./mainBody.css"
import SideMenu from "../SideMenu/sideMenu.js"
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
                       
                        />
            </div>
        );
    }
}
 
export default MainBody;