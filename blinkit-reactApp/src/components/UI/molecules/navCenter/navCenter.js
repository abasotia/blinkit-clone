import React, { Component } from 'react';
import SeachBar from "../../atoms/searchBar/searchBar.js"



class NavCenter extends Component {
   
    render() { 
        return (
            <div className="NavCenter">
                <SeachBar handleKeyUp={this.props.handleKeyUp}/>
            </div>
        );
    }
}
 
export default NavCenter;