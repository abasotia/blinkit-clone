import React, { Component } from 'react';
import NavLeft from "../../../components/molecules/NavLeft/navLeft.js"
import NavRight from "../../../components/molecules/NavRight/navRight.js"
import NavCenter from "../../../components/molecules/NavCenter/navCenter.js"
import "./navBar.scss"

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