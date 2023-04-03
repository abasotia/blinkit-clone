import React, { Component } from 'react';
import "./clearCartBtn.scss"

class ClearCartBtn extends Component {
   
    render() { 
        return (<div className="clearCart" id="clearCart" onClick={() => this.props.clearCartHandler()}>
                    Clear Cart
                </div>);
    }
}
 
export default ClearCartBtn;