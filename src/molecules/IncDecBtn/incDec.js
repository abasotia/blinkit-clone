import React, { Component } from 'react';

import "./incDec.scss"


class IncDecBtn extends Component {
    render() { 
        console.log("Inc Dec rendered");
        let {cart,productName} =this.props;
            // ,increaseProductUnit,decreaseProductUnit,id} = this.props;
        return (
            <div className="addBtn addBtnCart" id={productName}>
                <div className="minus" 
                id={productName}
                onClick={() => this.props.decreaseProductUnit(productName) }>
                    -
                </div>
                <div className="value" id={productName}>{cart[productName]}</div>
                <div className="plus" id={productName}
                onClick={() => this.props.increaseProductUnit(productName)}
                >
                +
                </div>
            </div> 
        );
    }
}
 
export default IncDecBtn;