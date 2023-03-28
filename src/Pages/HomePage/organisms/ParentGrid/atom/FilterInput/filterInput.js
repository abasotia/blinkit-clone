import React, { Component } from 'react';

import "./filterInput.scss"

import options from './constants';

class FilterInput extends Component {

    constructor(props)
    {
        super(props);
        this.optionList = this.renderOptions();
    }


    renderOptions()
    {
        return(
            options.map((data,index) => {
                return (
                    <option  value={data} className="SortByOption">
                        {data} 
                    </option>
                )
            })
        )
    }
    
    render() {
        //console.log("THIS IS THE FILTER INPUT FIELD") 
        return (
            <div className="SortByWrapper">
                <div className="SortByLabel">Sort By:</div>
                <select onChange={(event) => this.props.sortBy(event.target.value)} className="SortBySelect">    
                {this.optionList}
                </select>
            </div>
            
        );
    }
}
 
export default FilterInput ;