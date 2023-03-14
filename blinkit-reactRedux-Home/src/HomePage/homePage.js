import React, { Component } from 'react';
import ProductData from "../assets/Data/ProductData.js"
import NavBar from  "./organisms/NavBar/navBar";
import NavMenu from "./organisms/NavMenu/navMenu";
import MainBody from "./organisms/MainBody/mainBody"
import Footer from "./organisms/Footer/footer"
import sortByName from "./Helper/sortByName.js"
import sortByDiscountLowHigh from "./Helper/sortByDiscountLowHigh.js"
import sortByDiscountHighLow from "./Helper/sortByDiscountHighLow.js"
import { connect } from 'react-redux';
import { addToCart, increaseProductToCart, decreaseProductCart } from '../redux/cartActionTypes.js';

class HomePage extends Component {
constructor(props)
{
    super(props);
    this.state = {
        productsDisplayed: Object.values(ProductData).sort((x,y) => x.productName.localeCompare(y.productName)),
    }
}

// handleAddToCart(productName)
// {
//     let tempCart = {...this.state.cart};
//     tempCart[productName] = 1;
//     this.setState(this.state.cart = tempCart);
// }

// handleIncreaseProductUnit(productName){
//     let tempCart = {...this.state.cart};
//     tempCart[productName] += 1;
//     this.setState(this.state.cart = tempCart);
//     console.log("Cart on inc", this.state.cart);
// }

// handleDecreaseProductUnit(productName){
//     let tempCart = {...this.state.cart};
//     tempCart[productName] -= 1;
//     if(tempCart[productName] == 0)
//     {
//         // let { productName, ...removedProductName} = tempCart;
//         // tempCart = removedProductName
//         delete tempCart[productName]
//     }
//     this.setState(this.state.cart = tempCart);
//     console.log("cart on decrease", this.state.cart);

// }

handleKeyUp(searchValue)
{
    searchValue = searchValue.toUpperCase();
    let searchContainer = new Set()
    let productsDisplayed = ProductData;
    for(const key in productsDisplayed)
    {
        if(((productsDisplayed[key].productName).toUpperCase()).includes(searchValue))
        {
            searchContainer.add(productsDisplayed[key]);
        }
    }

    
   
    this.setState({productsDisplayed : [...searchContainer]});

}

handleSortBy(sortByValue)
{
    let sortContainer = this.state.productsDisplayed;
    switch(sortByValue){
        case "Name (A-Z)":
            sortByName(sortContainer)
            break;
        case "Discount (High to Low)":
            sortByDiscountHighLow(sortContainer)
            break;
        case "Discount (Low to High)":
            sortByDiscountLowHigh(sortContainer)
            break; 
    }

    this.setState({productsDisplayed: [...sortContainer]})

}


render() {
    return (
      <>
        <NavBar cart={this.props.cart}
                 handleKeyUp={this.handleKeyUp.bind(this)} /> 
        <NavMenu />
        <MainBody cart={this.props.cart} 
                  productsDisplayed={this.state.productsDisplayed}
                  addToCartHandler={this.props.addToCart} 
                  increaseProductUnit={this.props.increaseProductToCart}
                  decreaseProductUnit={this.props.decreaseProductCart}
                  sortBy={this.handleSortBy.bind(this)}         
        />
        <Footer />  
      </>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        cart : state.cart
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        addToCart : (productName) => dispatch(addToCart(productName)),
        increaseProductToCart : (productName) => dispatch(increaseProductToCart(productName)),
        decreaseProductCart : (productName) => dispatch(decreaseProductCart(productName))
    }

}

export default connect(mapStateToProps, mapDispatchToProps )(HomePage);
