class checkout{
    
    constructor(time)
    {
        this.root = document.getElementById("root");
        this.placeOrder = document.createElement("div");
        this.cartItems = document.createElement("div");
        this.time = time;

    }


    // I will have one functions on my checkout page
    // One function which will show all the items added to the cart
    // So you just need to create one function
    
    blinkitCartItems(basket,calculations)
    {
        this.cartItems.className = "itemsAddedToCart";
        this.cartItems.id = "itemsAddedToCart";

        for(let i=0; i<basket.length; i++)
        {
            let itemAddedToCart = document.createElement("div");
            itemAddedToCart.id = `itemAddedToCart${i}`;
            itemAddedToCart.className = `itemAddedToCart`;


            let itemDetailCart = document.createElement("div");
            itemDetailCart.className = "itemDetailCart";

            let itemImage = document.createElement("div");
            itemImage.className = "itemImage";

            itemImage.innerHTML = `<img src=${basket[i].image}>`;

            let itemPurchaseDetails = document.createElement("div");
            itemPurchaseDetails.className = "itemPurchaseDetails";
            let p1 = document.createElement("p");
            p1.innerHTML = `${basket[i].productName}`;

            let p2 = document.createElement("p");
            p2.innerHTML = `${basket[i].amountInKg}`;

            let p3 = document.createElement("p");
            p3.innerHTML = `₹ ${basket[i].newPrice}`;

            let oldPriceSpan = document.createElement("span");
            oldPriceSpan.className = "oldPrice";
            oldPriceSpan.innerHTML = `₹ ${basket[i].originalPrice}`;

            p3.appendChild(oldPriceSpan);


            itemPurchaseDetails.appendChild(p1);
            itemPurchaseDetails.appendChild(p2);
            itemPurchaseDetails.appendChild(p3);


            // For this page we can create new +/- buttons and use inc/dec
            //handlers of model and then do it

            let quantitySelectorCart = document.createElement("div");
            quantitySelectorCart.className = "quantitySelectorCart";
            
            
            // Now we are supposed to create 3 buttons for inc,dec, and val

            let plusCartBtn  = document.createElement("div");
            let minusCartBtn = document.createElement("div");
            let valCartBtn   = document.createElement("div");

            plusCartBtn. className =   `plusCartBtn`;
            minusCartBtn.className =   `minusCartBtn`;
            valCartBtn.  className =   `valCartBtn`;


            plusCartBtn.id =  `plusCartBtn${basket[i].id}`;
            minusCartBtn.id = `minusCartBtn${basket[i].id}`;
            valCartBtn.id =   `valCartBtn${basket[i].id}`;

            plusCartBtn.innerHTML = "+";
            minusCartBtn.innerHTML = "-";
            valCartBtn.innerHTML   = `${basket[i].units}`;

            quantitySelectorCart.appendChild(minusCartBtn);
            quantitySelectorCart.appendChild(valCartBtn);
            quantitySelectorCart.appendChild(plusCartBtn);

            itemDetailCart.appendChild(itemImage);
            itemDetailCart.appendChild(itemPurchaseDetails);

            itemAddedToCart.appendChild(itemDetailCart);
            itemAddedToCart.appendChild(quantitySelectorCart);

            this.cartItems.appendChild(itemAddedToCart);
        }

        this.placeOrder.appendChild(this.cartItems);

        //Inside this we will add items of the cart  

    }



    blinkitCreateCheckOutCartHeader(basket,calculations)
    {
        let data = calculations();
        this.placeOrder.className = "placeOrder";

        let placeOrderHeader = document.createElement("div");
        placeOrderHeader.className = "placeOrderHeader";
        placeOrderHeader.innerHTML = `<p>Place Order</p>`;

        let ttd = document.createElement("div");
        ttd.className = "timeToDeliver";

        let pDeliveryTime = document.createElement("p");
        pDeliveryTime.innerHTML = `Delivery in ${this.time} minutes`;

        let pNumItems = document.createElement("p");
        pNumItems.id = "itemNumberTtl";
        pNumItems.innerHTML = `${data[1]} items`;

        this.placeOrder.appendChild(placeOrderHeader);
        this.placeOrder.appendChild(ttd);
        this.placeOrder.append(pDeliveryTime);
        this.placeOrder.append(pNumItems);


        

        // Now all I need to do is loop over the entire basket and render items of the cart     
    }

    blinkitPayment(calculations, calculationsMRP)
    {
        let data = calculations();
        let MRP = calculationsMRP();
        let paymentSection = document.createElement("div");
        paymentSection.className = "paymentSection";

        let pay1 = document.createElement("div");
        let pay2 = document.createElement("div");
        let pay3 = document.createElement("div");
        let pay4 = document.createElement("div");

        pay1.className = "paymentDetails";
        pay2.className = "paymentDetails";
        pay3.className = "paymentDetails";
        pay4.className = "paymentDetails";

       

        pay1.innerHTML = `<div>MRP</div><div id="MRPpay1">₹ ${MRP}</div>`;
        pay2.innerHTML = `<div>Product Discount</div><div class = "slash" id="pDiscount";">-₹${data[0]}<div>`;
        pay3.innerHTML = `<div>Delivery Charge</div><div><span class="slash" id="deliveryCharge">₹ 15</span>FREE</div>`;

        
        pay4.innerHTML = `<div class="grandTotal">Grand Total</div>`

      
        let grandTotal = document.createElement("div");
        grandTotal.className = "grandTotal";
        grandTotal.id = "grandTotal";
        grandTotal.innerHTML = `₹ ${data[0]}`;
        pay4.appendChild(grandTotal);

        paymentSection.appendChild(pay1);
        paymentSection.appendChild(pay2);
        paymentSection.appendChild(pay3);
        paymentSection.appendChild(pay4);


        let footerText = document.createElement("div");
        footerText.className = "footerText";
        footerText.id = "footerTextPage2";
        footerText.innerHTML = `Coupons are onlly applicable on the Blinkit app`;

        paymentSection.appendChild(footerText);

        let totalBar = document.createElement("div");
        totalBar.className = "totalBar";
        let finalResult = document.createElement("div");
        finalResult.className = "finalResult";
        finalResult.id = "paymentDetailsFinalResult"
        finalResult.innerHTML = `${data[1]} items . ₹ ${data[0]}`;

        let spanAmt = document.createElement("span");
        spanAmt.className = "spanAmt slash";
        spanAmt.id = "spanAmt";
        spanAmt.innerHTML = `₹ ${MRP}`;

        finalResult.appendChild(spanAmt);

        let proceed = document.createElement("div");
        proceed.innerHTML = `Proceed >`; 

        totalBar.appendChild(finalResult);
        totalBar.appendChild(proceed);

        paymentSection.appendChild(totalBar);

        this.root.appendChild(paymentSection);



    }

    blinkitshow(basket,calculations)
    {
        console.log("Hello");
        this.blinkitCreateCheckOutCartHeader(basket,calculations);
        this.blinkitCartItems(basket,calculations);
        this.root.appendChild(this.placeOrder);
        console.log(this.placeOrder);

    }

}