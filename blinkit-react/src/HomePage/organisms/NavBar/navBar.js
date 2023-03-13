import React, { Component } from 'react';
import NavLeft from "./molecules/NavLeft/navLeft.js"
import NavCenter from "./molecules/NavCenter/navCenter.js"
import NavRight from "./molecules/NavRight/navRight.js"
import "./navBar.scss"

class NavBar extends Component {
    render() { 
        return (
            <div className="navBar">
                <NavLeft/>
                <NavCenter handleKeyUp={this.props.handleKeyUp}/>
                <NavRight cart={this.props.cart}
                    />
            </div>
        );
    }
}
 
export default NavBar;