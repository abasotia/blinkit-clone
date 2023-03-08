import React, { Component } from 'react';
import NavBar from "../components/organisms/NavBar/navBar" 
import SubHeader from "../components/molecules/SubHeader/subHeader" 
import PlaceOrder from "./organisms/PlaceOrderSection/PlaceOrder.js" 
import PaymentSection  from "./organisms/PaymentSection/PaymentSection.js" 
import Footer from "../components/organisms/Footer/footer.js" 

class CheckoutPage extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            cart:{
                "Lemon": 2,
                "Carrots": 2,
                "Garlic": 2,
                "Onion": 2,
                "Ginger": 2,
                "Tomato": 2,
                "Mushrooms": 2,
                "Potato": 2,
                "Green Chillies": 2
            }
        }
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

    handleIncreaseProductUnit(productName)
    {
        let tempCart = {...this.state.cart};
        tempCart[productName] += 1;
        this.setState(this.state.cart = tempCart);
        console.log("Cart on inc", this.state.cart);
    }

    handleDecreaseProductUnit(productName)
    {
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

    



    render() { 
        return (<>
            <NavBar cart={this.state.cart}/>
            <SubHeader/>
            <PlaceOrder cart={this.state.cart} 
                        clearCartHandler={this.clearCart.bind(this)}
                        removeItemFromCart={this.removeItemFromCart.bind(this)}
                        increaseProductUnit={this.handleIncreaseProductUnit.bind(this)}       
                        decreaseProductUnit={this.handleDecreaseProductUnit.bind(this)}             
            />
            <PaymentSection cart={this.state.cart} />
            <Footer/>  
        </>
        );
    }
}
 
export default CheckoutPage;