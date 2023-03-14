import React, { Component, useState } from 'react';
import ProductData from "../assets/Data/ProductData.js"
import NavBar from  "./organisms/NavBar/navBar";
import NavMenu from "./organisms/NavMenu/navMenu";
import MainBody from "./organisms/MainBody/mainBody"
import Footer from "./organisms/Footer/footer"
import sortByName from "./Helper/sortByName.js"
import sortByDiscountLowHigh from "./Helper/sortByDiscountLowHigh.js"
import sortByDiscountHighLow from "./Helper/sortByDiscountHighLow.js"
import { connect,useSelector,useDispatch } from 'react-redux';
import { addToCart, increaseProductToCart, decreaseProductCart } from '../redux/cartActionTypes.js';

const HomePage = () => {

    const cart = useSelector((state) => state.cart)
    const [productsDisplayed, setProductsDisplayed] = useState(Object.values(ProductData).sort((x,y) => x.productName.localeCompare(y.productName)));

    const dispatch = useDispatch();



function handleKeyUp(searchValue)
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

    
   
    setProductsDisplayed({productsDisplayed : [...searchContainer]});

}

function handleSortBy(sortByValue)
{
    let sortContainer = productsDisplayed;
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

    setProductsDisplayed({productsDisplayed: [...sortContainer]})
}

return (
      <>
        <NavBar cart={cart}
                 handleKeyUp={handleKeyUp} /> 
        <NavMenu />
        <MainBody cart={cart} 
                  productsDisplayed={productsDisplayed}
                  addToCartHandler={(productName) => dispatch(addToCart(productName))} 
                  increaseProductUnit={(productName) => dispatch(increaseProductToCart(productName))}
                  decreaseProductUnit={(productName) => dispatch(decreaseProductCart(productName))}
                  sortBy={handleSortBy}         
        />
        <Footer />  
      </>
);
}





export default HomePage;
