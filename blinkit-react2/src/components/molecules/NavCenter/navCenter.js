import React, { Component } from 'react';
import "./navCenter.scss"

class NavCenter extends Component {

    render() { 
        return (

            <div className="searchDiv">
            <input className="search-input" id="searchInput" type="search" placeholder="Search..."></input>
            </div>
            
        );
    }
}
 
export default NavCenter;