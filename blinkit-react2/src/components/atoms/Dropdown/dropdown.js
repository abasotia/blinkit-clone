import React, { Component } from 'react';
import "./dropdown.css"



class Dropdown extends Component {
    constructor(props)
    {
        super(props);
        this.label = this.props.label;
        this.optionData = this.props.options;
    }
    renderOptions()
    {
        return (this.optionData.map((data) => {
            return <option key={data} value={data}>{data}</option>
        }));
    }
    render() { 
        console.log(this.optionData)
        return(
           <select  id={this.label} className={this.label}>
                {this.renderOptions()}
           </select>
        )
    }
}
 
export default Dropdown;