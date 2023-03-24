import React, { Component } from 'react';
import "./removeBtn.scss"

class RemoveBtn extends Component {

    render() { 
        return (<div class="remove" 
                id={"remove"+this.props.ProductName} 
                onClick={() => (this.props.removeItemFromCart(this.props.productName))}>
                Remove</div>);
    }
}
 
export default RemoveBtn;