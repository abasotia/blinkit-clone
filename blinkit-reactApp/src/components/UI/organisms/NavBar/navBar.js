import React, { Component } from 'react';
import NavLeft from "../../molecules/navLeft/navLeft.js"
import NavCenter from "../../molecules/navCenter/navCenter.js"
import NavRight from "../../molecules/navRight/navRight.js"
import "./navBar.css"

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