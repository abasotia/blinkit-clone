import React, { Component } from 'react';
import LoginBtn from "./atoms/LoginBtn/loginBtn.js"
import CartBtn from  "./atoms/CartBtn/cartBtn"
import "./navRight.scss"
class NavRight extends Component {
    render() { 
        return (
           <div className="NavRight">
            <LoginBtn/>
            <CartBtn cart={this.props.cart}/>
           </div>
        );
    }
}
 
export default NavRight;