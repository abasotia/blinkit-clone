import React, { Component } from 'react';
<<<<<<< HEAD
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
=======
import "./navRight.scss"
import LoginBtn from "./atoms/LoginBtn/loginBtn.js"
import CartBtn from "./atoms/CartBtn/cartBtn"

class NavRight extends Component {
    render() { 
        return (
            <div className="NavRight">
                <LoginBtn />
                <CartBtn cart={this.props.cart} />
            </div>
>>>>>>> 01e787cf (20-March)
        );
    }
}
 
export default NavRight;