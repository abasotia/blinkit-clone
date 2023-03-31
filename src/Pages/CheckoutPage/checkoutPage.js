import React, { Component } from 'react';

import NavBar from "../../molecules/NavBar/navBar" 
import SubHeader from "../../molecules/SubHeader/subHeader" 
import PlaceOrder from "./organisms/PlaceOrderSection/PlaceOrder.js" 
import PaymentSection  from "./organisms/PaymentSection/PaymentSection.js" 
import Footer from "../../molecules/Footer/footer.js" 

class CheckoutPage extends Component {
   
    render() { 
       
        return (<>
            <NavBar cart={this.props.cart}
                    productData={this.props.productData}        />
            <SubHeader/>
            <PlaceOrder cart={this.props.cart} 
                        productData={this.props.productData}
                        clearCartHandler={this.props.clearCart}
                        removeItemFromCart={this.props.removeItemFromCart}
                        increaseProductUnit={this.props.handleIncreaseProductUnit}       
                        decreaseProductUnit={this.props.handleDecreaseProductUnit}             
            />
            <PaymentSection cart={this.props.cart} 
                            productData={this.props.productData}/>
            <Footer/>  
        </>
        );
    }
}
 
export default CheckoutPage;