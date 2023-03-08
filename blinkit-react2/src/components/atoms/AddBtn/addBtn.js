import React, { Component } from 'react';

class AddBtn extends Component {
    render() { 
        let {productName, cart, id, addToCartHandler} = this.props
        return (
            <div className="addBtn" 
            id={"addBtn"+this.props.id} 
            onClick={() => addToCartHandler(productName)}>
                ADD
            </div>
        );
    }
}
 
export default AddBtn;