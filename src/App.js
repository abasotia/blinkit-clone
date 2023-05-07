import React, { Component } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import Checkout from "./pages/CheckoutPage"
import Thankyou from "./pages/ThankyouPage"

class App extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            cart: {},
            productData: {}
        }
        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.handleIncreaseProductUnit = this.handleIncreaseProductUnit.bind(this);
        this.handleDecreaseProductUnit = this.handleDecreaseProductUnit.bind(this);
        this.clearCart = this.clearCart.bind(this);
        this.removeItemFromCart = this.removeItemFromCart.bind(this);
    }

    componentDidMount()
    {
        fetch('./ProductData.json')
        .then(response => response.json())
        .then(data =>
        {  
            this.setState({productData : data})
        })
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
    console.log("Cart on inc", this.props.cart);
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
    clearCart()
    {
        const temp = {};
        this.setState(this.state.cart = temp);
    }
    removeItemFromCart(productName)
    {
        const temp = {...this.state.cart};
        delete temp[productName];
        this.setState(this.state.cart = temp);
        //Once the state is set we need to move forward
    }

render ()
    {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage cart={this.state.cart}
                                               productData={this.state.productData}
                                               handleAddToCart={this.handleAddToCart}   
                                               handleDecreaseProductUnit={this.handleDecreaseProductUnit}
                                               handleIncreaseProductUnit={this.handleIncreaseProductUnit}/>} />
                    <Route path="checkout" element={<Checkout cart={this.state.cart}
                                                     productData={this.state.productData}
                                                     clearCart={this.clearCart}
                                                     removeItemFromCart={this.removeItemFromCart}
                                                     handleDecreaseProductUnit={this.handleDecreaseProductUnit}
                                                     handleIncreaseProductUnit={this.handleIncreaseProductUnit}/>} />
                    <Route path="thankyou" element={<Thankyou />} />
                </Routes>
            </BrowserRouter>
        );
    }
}
  
  export default App;