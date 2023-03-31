import React, { Component } from 'react';
import "./PaymentSection.scss"
import { Link } from 'react-router-dom';
import calculateAmount from '../../../../Helper/calculateAmount';
import calculateItems from '../../../../Helper/calculateItems';
import calculateMRP from '../../Helper/calculateMRP';

class PaymentSection extends Component {
    
     
    render() { 
        let {cart, productData} = this.props;
        let MRP = calculateMRP(cart, productData);
        let amount = calculateAmount(cart,productData);
        let items = calculateItems(cart);
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
                    <Link to="/thankyou" className="proceedBar" ><div>{"Proceed >"}</div></Link>
                </div>
            </div>
        );
    }
}

PaymentSection.propTy ={

}
 
export default PaymentSection ;
 