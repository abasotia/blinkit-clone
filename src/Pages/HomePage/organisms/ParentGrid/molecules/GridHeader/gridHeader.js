import React, { Component } from 'react';
import "./gridHeader.scss";
import FilterInput from '../../atom/FilterInput/filterInput';


class GridHeader extends Component {
    render() { 
        console.log("THIS IS THE GRID HEADER")
        return (
            <div className="gridHeader">
                <div className="gridHeadingText">Buy Fresh Vegetables Online</div>
                <FilterInput sortBy={this.props.sortBy}/>
            </div>
        );
    }
}
 
export default GridHeader;