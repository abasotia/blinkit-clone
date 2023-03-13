import React, { Component } from 'react';
import "./filterInput.css"

class FilterInput extends Component {
    renderOptions()
    {
        let options = [
            "Name (A-Z)",
            "Discount (High to Low)",
            "Discount (Low to High)" 
        ]

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
        return (
            <div className="SortByWrapper">
                <div className="SortByLabel">Sort By:</div>
                <select onChange={(event) => this.props.sortBy(event.target.value)} className="SortBySelect">    
                {this.renderOptions()}
                </select>
            </div>
            
        );
    }
}
 
export default FilterInput ;