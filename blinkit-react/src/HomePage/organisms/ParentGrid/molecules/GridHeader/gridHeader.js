import React, { Component } from 'react';
import FilterInput from '../../atom/FilterInput/filterInput';
import "./gridHeader.scss";

class GridHeader extends Component {
    render() { 
        return (
            <div className="gridHeader">
                <div className="gridHeadingText">Buy Fresh Vegetables Online</div>
                <FilterInput sortBy={this.props.sortBy}/>
            </div>
        );
    }
}
 
export default GridHeader;