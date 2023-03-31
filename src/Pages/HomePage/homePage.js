import React, { Component } from 'react';
import ReactDOM from "react-dom/client";


import NavBar from  "../../molecules/NavBar/navBar";
import SubHeader from "../../molecules/SubHeader/subHeader";
import MainBody from "./organisms/MainBody/mainBody"
import Footer from "../../molecules/Footer/footer"

import sortByName from "./Helper/sortByName.js"
import sortByDiscountLowHigh from "./Helper/sortByDiscountLowHigh.js"
import sortByDiscountHighLow from "./Helper/sortByDiscountHighLow.js"


 


class HomePage extends Component {
constructor(props)
{
    super(props);
    this.state = {
       // cart:{},
        productsDisplayed: [],
    }
}

componentDidMount(){
    console.log("Component state of productData set")
    fetch('./ProductData.json')
    .then(response => response.json())
    .then(data =>
        {  
            this.setState({productsDisplayed :Object.values(data).sort((x,y) => x.productName.localeCompare(y.productName))})
        })
    
}
// handleAddToCart(productName)
// {
//     let tempCart = {...this.props.cart};
//     tempCart[productName] = 1;
//     this.setState(this.props.cart = tempCart);
// }

// handleIncreaseProductUnit(productName){
//     let tempCart = {...this.props.cart};
//     tempCart[productName] += 1;
//     this.setState(this.state.cart = tempCart);
//     console.log("Cart on inc", this.props.cart);
// }

// handleDecreaseProductUnit(productName){
//     let tempCart = {...this.props.cart};
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
    //let productsDisplayed = ProductData;
    let productsDisplayed = this.state.productData
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
    console.log("HOME PAGE RENDERED");
    return (
      <>
        <NavBar cart={this.props.cart}
                productData={this.props.productData}
                 handleKeyUp={this.handleKeyUp.bind(this)} /> 
        <SubHeader />
        <MainBody cart={this.props.cart} 
                 productData={this.props.productData}
                  productsDisplayed={this.state.productsDisplayed}
                  addToCartHandler={this.props.handleAddToCart} 
                  increaseProductUnit={this.props.handleIncreaseProductUnit}
                  decreaseProductUnit={this.props.handleDecreaseProductUnit}
                  sortBy={this.handleSortBy.bind(this)}         
        />
        <Footer />  
      </>
    );
  }
}

export default HomePage;
