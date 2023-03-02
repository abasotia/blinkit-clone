import React, { Component } from 'react';
import "./checkout.css"
import NavBar from '../../organisms/NavBar/navBar';
import NavMenu from '../../organisms/NavMenu/navMenu';
class Checkout extends Component {
    render() { 
        return (
            <>
            <NavBar/>
            <NavMenu/>
            </>
            
        );
    }
}
 
export default Checkout;