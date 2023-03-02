import React, { Component } from 'react';
import "./incDecBtn.css"


class IncDecBtn extends Component {
    render() { 
        let {cart,productName,increaseProductUnit,decreaseProductUnit,id} = this.props;
        return (
            <div className="addBtn addBtnCart" id={id}>
                <div className="minus" 
                id={id}
                onClick={() => decreaseProductUnit(productName) }>
                    -
                </div>
                <div className="value" id={this.props.id}>{cart[productName]}</div>
                <div className="plus" id={this.props.id}
                onClick={() => increaseProductUnit(productName)}
                >
                +
                </div>
            </div> 
        );
    }
}
 
export default IncDecBtn;