class Products{
    constructor()
    {
      this.parentGrid = document.createElement("div");
      this.gridHeader = document.createElement("div");
      this.gridHeadingText = document.createElement("div");
      this.mainGrid = document.createElement("div");      
    }

    blinkitProductView(products,basket,isPresentInCart)
    {
        this.parentGrid.className = "parentGrid";
        this.gridHeader.className = "gridHeader";
        this.gridHeadingText.className = "gridHeadingText";
        this.mainGrid.className = "mainGrid";
        this.mainGrid.id = "mainGrid";
        this.gridHeadingText.innerHTML = "Buy Fresh Vegetables Online";

        this.gridHeader.appendChild(this.gridHeadingText);
        this.parentGrid.appendChild(this.gridHeader);

        let n = products.length;

        console.log(n);
         

        // for every element before rendering we need to check if it present in the model
        // display according to that 
        for(let i=0; i<n; i++)
        {
            let node = this.blinkitCreateProduct(products[i],basket,products[i].id,isPresentInCart);
            console.log(node);
            this.mainGrid.append(node);

        }        

        this.parentGrid.appendChild(this.mainGrid);
        return this.parentGrid;

    }

    blinkitIncDec(index,basketItem){

        let IncDec = document.createElement("div");
        IncDec.className = "addBtn addBtnCart";
        IncDec.id = index;
        let plus = document.createElement("div")
        let val  = document.createElement("div");
        let minus = document.createElement("div");
        
        // Give className
        plus.className = "plus";
        minus.className = "minus";
        val.className = "value";

        plus.id = `plus${index}`;
        minus.id = `minus${index}`;
        val.id = `val${index}`;
        
        plus.innerHTML = "+";
        minus.innerHTML = "-";

        if(basketItem === undefined)
            val.innerHTML = 1
        else
            val.innerHTML = `${basketItem.units}`;
                
        IncDec.appendChild(minus);
        IncDec.appendChild(val);
        IncDec.appendChild(plus);

        return IncDec;
    }

    blinkitAddBtn(index){

        let addBtn = document.createElement("div");
        addBtn.className = "addBtn";
        addBtn.id = `addBtn${index}`;
        let addP = document.createElement("div");
        addP.className = "addItem";
        addP.innerHTML = "ADD";
        
        addBtn.appendChild(addP);

        

        return addBtn;
    }

    blinkitCreateProduct(product,basket,Id,isPresentInCart)
    {
       let {id, image, productName, amountInKg, newPrice, originalPrice, units} = product;
        let productDetails = document.createElement("div");
        productDetails.className = "productDetails";
        
        let offer = document.createElement("div");
        offer.className = "offer";
        offer.innerHTML = "21% OFF";
        
        productDetails.appendChild(offer);

        let productItem = document.createElement("div");
        productItem.className = "product";
        productItem.innerHTML = `<img src="${image}">`;
        
        productDetails.appendChild(productItem);

        let utilDiv1 = document.createElement("div");
        utilDiv1.innerHTML = `<img  src="../../images/fresh_icon.png" width="10" height="10">`;
        let utilDiv2 = document.createElement("div");
        utilDiv2.innerHTML = "sourced at 5am";
        utilDiv1.appendChild(utilDiv2);
        
        productDetails.appendChild(utilDiv1);

        let productlabel = document.createElement("div");
        productlabel.innerHTML = `${productName}`;

        productDetails.appendChild(productlabel);

        let amount = document.createElement("div");
        amount.className = "amountInKg";
        amount.innerHTML = `${amountInKg}`;
        productDetails.appendChild(amount);

        let priceDetailsAdd = document.createElement("div");
        priceDetailsAdd.className = "priceDetailsAdd";

        let priceDetails = document.createElement("div")
        priceDetails.className = "priceDetails";

        let nPp = document.createElement("p");
        let oPp = document.createElement("p");

        nPp.className = "newPrice";
        oPp.className = "oldPrice";


        nPp.innerHTML = `₹ ${newPrice}`;
        oPp.innerHTML = `₹ ${originalPrice}`;

        priceDetails.appendChild(nPp);
        priceDetails.appendChild(oPp);

       

        priceDetailsAdd.appendChild(priceDetails);
        
        //Not a good code practise 
        //Loop through the basket
        // If a map used would have been better

       

        // let basketIndex = isPresentInCart(Id);
        // console.log(basketIndex);
        // if(basketIndex == -1)
        //  {
        //     let addBtn = this.blinkitAddBtn(Id-1);
        //     priceDetailsAdd.appendChild(addBtn);
        //  }
        //  else{
        //     let incDecBtn = this.blinkitIncDec(Id-1,basket[basketIndex]);
        //     priceDetailsAdd.appendChild(incDecBtn);
        //  }   

        let addBtn = this.blinkitAddBtn(Id-1);
        priceDetailsAdd.appendChild(addBtn);
        

        productDetails.appendChild(priceDetailsAdd);
        
        //console.log(productDetails);
        return productDetails;
    }
}