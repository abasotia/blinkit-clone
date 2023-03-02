import React, { Component } from 'react';
import ReactDOM from "react-dom/client";
import "./homePage.css";
import NavBar from "../../organisms/NavBar/navBar.js";
import NavMenu from "../../organisms/NavMenu/navMenu.js";
import MainBody from "../../organisms/MainBody/mainBody";
import Footer from "../../organisms/Footer/footer";
import ProductData from '../../../../assets/Data/ProductData';

class HomePage extends Component {
constructor(props)
{
    super(props);
    this.state = {
        productsDisplayed: Object.values(ProductData),
        cart: {}
    }
}

handleAddToCart(productName)
{
    let tempCart = {...this.state.cart};
    tempCart[productName] = 1;
    this.setState(this.state.cart = tempCart);
}

handleIncreaseProductUnit(productName){
    let tempCart = {...this.state.cart};
    tempCart[productName] += 1;
    this.setState(this.state.cart = tempCart);
    console.log("Cart on inc", this.state.cart);
}

handleDecreaseProductUnit(productName){
    let tempCart = {...this.state.cart};
    tempCart[productName] -= 1;
    if(tempCart[productName] == 0)
    {
        // let { productName, ...removedProductName} = tempCart;
        // tempCart = removedProductName
        delete tempCart[productName]
    }
    this.setState(this.state.cart = tempCart);
    console.log("cart on decrease", this.state.cart);

}

handleKeyUp(searchValue)
{
    searchValue = searchValue.toUpperCase();
    let searchContainer = new Set()
    for(const key in ProductData)
    {
        if(((ProductData[key].productName).toUpperCase()).includes(searchValue))
        {
            searchContainer.add(ProductData[key]);
        }
    }

    this.setState({productsDisplayed : [...searchContainer]});
}


render() {
    return (
      <>
        <NavBar cart={this.state.cart}
                handleKeyUp={this.handleKeyUp.bind(this)} />
        <NavMenu />
        <MainBody cart={this.state.cart} 
                  productsDisplayed={this.state.productsDisplayed}
                  addToCartHandler={this.handleAddToCart.bind(this)} 
                  increaseProductUnit={this.handleIncreaseProductUnit.bind(this)}
                  decreaseProductUnit={this.handleDecreaseProductUnit.bind(this)}
                
        />
        <Footer />
      </>
    );
  }
}

export default HomePage;
