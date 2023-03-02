import React from "react";
import { Component } from "react";
import "./searchBar.css"



class SearchBar extends Component {

    render()
    {
        return(
            <div className="searchDiv">
                <input className="searchInput" 
                        id="searchInput" 
                        type="search" 
                        placeholder="Search..."
                        onKeyUp={(e)=> this.props.handleKeyUp(e.target.value)}
                ></input>
            </div>
        );
    }
}

export default SearchBar