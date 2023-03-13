import React, { Component } from 'react';
import MyCart from "./atoms/MyCart/myCart.js"
import LoginBtn from "./atoms/LoginBtn/loginBtn.js"
import "./loginCart.scss"

class LoginCart extends Component {
    render() {      
        return (
            <div className="LoginCart">
                <LoginBtn/>
                <MyCart cart={this.props.cart}/>
            </div>
        );
    }
}
 
export default LoginCart;