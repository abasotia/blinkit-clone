import React, { Component } from 'react';
import {connect, useDispatch, useSelector} from 'react-redux'

import NavBar from "../components/organisms/NavBar/navBar" 
import SubHeader from "../components/molecules/SubHeader/subHeader" 
import PlaceOrder from "./organisms/PlaceOrderSection/PlaceOrder.js" 
import PaymentSection  from "./organisms/PaymentSection/PaymentSection.js" 
import Footer from "../components/organisms/Footer/footer.js" 

import { addToCart, deleteOneFromCart, removeFromCart, clearCart } from "../redux/cartActions.js"



const CheckoutPage =() => {

     const cart = useSelector((state) => state.cart)
     const dispatch = useDispatch()

    return (<>
            <NavBar cart={cart}/>
            <SubHeader/>
            <PlaceOrder cart={cart} 
                        clearCartHandler={() => dispatch(clearCart())}
                        removeItemFromCart={(productName) => dispatch(removeFromCart(productName))}
                        increaseProductUnit={(productName) => dispatch(addToCart(productName))}       
                        decreaseProductUnit={(productName) => dispatch(deleteOneFromCart(productName))}             
            />
            <PaymentSection cart={cart} />
            <Footer/>  
        </>
        );
}


 
export default CheckoutPage;