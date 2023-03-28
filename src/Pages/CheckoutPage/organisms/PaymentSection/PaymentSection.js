import React, { Component } from 'react';
import "./PaymentSection.scss"

import calculateAmount from '../../../../Helper/calculateAmount';
import calculateItems from '../../../../Helper/calculateItems';
import calculateMRP from '../../Helper/calculateMRP';

class PaymentSection extends Component {
    

    render() { 
        let MRP = calculateMRP(this.props.cart);
        let amount = calculateAmount(this.props.cart);
        let items = calculateItems(this.props.cart);
        return (
            <div className="paymentSection">
                <div className="paymentDetails">
                    <div>MRP</div>
                    <div id="MRPpay1">{"₹ "+MRP}</div>
                </div>
                <div className="paymentDetails">
                    <div>Product Discount</div>
                    <div className="slash" id="pDiscount">
                        {"-₹"+(MRP - amount)}
                    </div>
                </div>
                <div className="paymentDetails">
                    <div>Delivery Charge</div>
                    <div>
                        <span className="slash" id="deliveryCharge">₹ 15</span>
                        FREE
                    </div>
                </div>
                <div className="paymentDetails">
                    <div className="grandTotal">Grand Total</div>
                    <div className="grandTotal" id="grandTotal">{"₹"+amount}</div>
                </div>
                <div className="footerText" id="footerTextPage2">Coupons are only applicable on the Blinkit App</div>
                <div className="totalBar">
                    <div className="finalResult" id="paymentDetailsFinalResult">
                       {items+" items. ₹ "+amount}
                        <span className="spanAmt slash" id="spanAmt">₹ 304</span>
                    </div>
                    <div>{"Proceed >"}</div>
                </div>
            </div>
        );
    }
}

PaymentSection.propTy ={

}
 
export default PaymentSection ;
 