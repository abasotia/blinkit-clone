import React, { Component } from 'react';
import MyCart from "../myCart/myCart.js"
import LoginBtn from "../../atoms/LoginBtn/loginBtn.js"
import "./loginCart.css"

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