import React, { Component } from 'react';
import PropTypes from 'prop-types'
import "./mainBody.scss"
import SideMenu from "./molecules/SideMenu/sideMenu.js"
import ParentGrid from '../ParentGrid/parentGrid';
import { defaultFunction } from '../../../../Helper/defaultFunction';



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
MainBody.propTypes = {
    cart: PropTypes.object,
    productsDisplayed: PropTypes.array,
    addToCartHandler: PropTypes.func,
    increaseProductUnit: PropTypes.func,
    decreaseProductUnit: PropTypes.func,
    sortBy: PropTypes.func

}

MainBody.defaultProps = {
    cart: {},
    productsDisplayed: [],
    addToCartHandler: defaultFunction,
    increaseProductUnit: defaultFunction,
    decreaseProductunit: defaultFunction,
    sortBy: PropTypes.func
}

export default MainBody;