import React, { Component } from 'react';
import NavLeft from "./molecules/NavLeft/navLeft.js"
import NavRight from "./molecules/NavRight/navRight.js"
import NavCenter from "./molecules/NavCenter/navCenter.js"
import "./navBar.css"

class NavBar  extends Component {
    
    render() { 
        return (
            <div className="navBar">
                <NavLeft/>
                 <NavCenter />
                <NavRight cart={this.props.cart} />
            </div>
        );
    }
}
 
export default NavBar ;