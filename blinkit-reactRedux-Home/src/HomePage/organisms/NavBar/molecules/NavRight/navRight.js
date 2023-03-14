import React, { Component } from 'react';
import LoginCart from "./molecules/LoginCart/loginCart.js"
class NavRight extends Component {
    render() { 
        return (
            <>
                <LoginCart cart={this.props.cart}/>
            </>
        );
    }
}
 
export default NavRight;