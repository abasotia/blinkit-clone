import React, { Component } from 'react';
<<<<<<< HEAD
import SeachBar from "./atoms/searchBar/searchBar.js"
import "./navCenter.scss"


class NavCenter extends Component {
   
    render() { 
        return (
            <div className="NavCenter">
                <SeachBar handleKeyUp={this.props.handleKeyUp}/>
            </div>
=======
import "./navCenter.scss"

class NavCenter extends Component {

    render() { 
        return (

            <div className="searchDiv">
            <input className="search-input" id="searchInput" type="search" placeholder="Search..."></input>
            </div>
            
>>>>>>> 01e787cf (20-March)
        );
    }
}
 
export default NavCenter;