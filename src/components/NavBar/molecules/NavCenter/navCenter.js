import React, { Component } from 'react';
import SeachBar from "./atoms/searchBar/searchBar.js"
import "./navCenter.scss"


class NavCenter extends Component {
   
    render() { 
        console.log("nav bar center is re-rendered")
        return (
            <div className="NavCenter">
                <SeachBar handleKeyUp={this.props.handleKeyUp}/>
            </div>
        );
    }
}
 
export default NavCenter;