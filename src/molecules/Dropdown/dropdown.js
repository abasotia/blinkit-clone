import React, { Component } from 'react';
import "./dropdown.scss"



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
      console.log("Dropdown from the components rendered")
        return(
           <select  id={this.label} className={this.label}>
                {this.renderOptions()}
           </select>
        )
    }
}
 
export default Dropdown;