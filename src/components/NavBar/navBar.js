import React, { Component } from 'react';
import NavLeft from "./molecules/NavLeft/navLeft.js"
import NavRight from "./molecules/NavRight/navRight.js"
import NavCenter from "./molecules/NavCenter/navCenter.js"
import "./navBar.css"

class NavBar  extends Component {
    
    render() { 
        console.log("Nav Bar is re-rendered");
        return (
            <div className="navBar">
                <NavLeft/>
                 <NavCenter handleKeyUp={this.props.handleKeyUp}/>
                <NavRight cart={this.props.cart} />
            </div>
        );
    }
}
 
export default NavBar ;