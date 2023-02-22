class View{

    constructor(content)
    {
         this.rootDiv = document.getElementById("root");
         this.mainBody = document.createElement('div');
         this.content = content
         this.addBtnRemoved = [];
    }  

    createMainBody(products,basket,isPresentInCart)
    {
        this.mainBody.className = "main-body";
        let sideMenu = this.createSideBar();
        let parentGrid = this.createProductGrid(products,basket,isPresentInCart);
        this.mainBody.appendChild(sideMenu);
        this.mainBody.appendChild(parentGrid);
        this.rootDiv.appendChild(this.mainBody)
    }

    createNavBar()
    {
        let navigationBar = new NavigationBar("8 minutes", "12, Chinmaya Hospital...",this.content);
        let NavMain = navigationBar.blinkitNavMain();
        this.rootDiv.appendChild(NavMain);
    }

    createNavMenu()
    { 
        let navMenu = new NavMenu();
        let menu = navMenu.blinkitMenuList();
        this.rootDiv.appendChild(menu);
    }

    createSideBar()
    {
        let sideBar = new SideBar();
        let sideMenu = sideBar.blinkitSideMenu();
        return sideMenu;
    }

    createProductGrid(products,basket,isPresentInCart)
    {
        let productGrid =new Products();
        let parentGrid = productGrid.blinkitProductView(products,basket,isPresentInCart);
        return parentGrid;
    }

    createFooter()
    {
        let footer = new Footer();
        let footerArr = footer.blinkitCreateFooter();
        
        for(let i=0; i<3; i++)
            this.rootDiv.append(footerArr[i]);
    }

    createCheckout(basket,calculations)
    {
     
        let check = new checkout();
        // if(basket.length == 0)
        // {
        //     let x
        // }
        // check.blinkitCreateCheckOutCartHeader(basket,calculations);
        // check.blinkitCartItems(basket,calculations);
        check.blinkitshow(basket,calculations);
    }

    printView()
    {
        console.log(this.rootDiv);
    }
    
    // For adding eventListener
    changeAddBtn(addToCart,incrementHandler,decrementHandler,isPresentInCart,basket,calculations)
    {
        console.log("This is called after every refresh");
        let addItems = document.querySelectorAll('.addBtn');

        console.log(addItems);

        let N = addItems.length;

        for(let i=0; i<N; i++)
        {
            // We need to catch hold of the id associated to the addBtn
            // this gives us the id of addItems
            
            let basketIndex = isPresentInCart(i+1);
            console.log("basketIndex",basketIndex);

            addItems[i].addEventListener("click", (e)=>{
                addToCart(i);
                this.updateCartBtn(calculations);
                let parentDetailsAdd = addItems[i].parentNode;
                addItems[i].parentNode.removeChild(addItems[i]);
                
                //here, i is the index in the products array 
                let incDecBtn = new Products().blinkitIncDec(i);
                parentDetailsAdd.appendChild(incDecBtn);
                this.OnIncDec(incrementHandler,decrementHandler,incDecBtn,addItems[i],calculations);   
            })
            // Means it is present in the basket
            // If it is present in the basket then we need to show the +/- button
            // How to show the +/- button
            if(basketIndex != -1)
            {
                let parentDetailsAdd = addItems[i].parentNode;
                addItems[i].parentNode.removeChild(addItems[i]);
                
                //here, i is the index in the products array 
                let incDecBtn = new Products().blinkitIncDec(i,basket[basketIndex]);
                parentDetailsAdd.appendChild(incDecBtn);
                this.OnIncDec(incrementHandler,decrementHandler,incDecBtn,addItems[i],calculations);
            }
        }
    } 

    removeIncDec(IncDec,addItem)
    {
        // We need to know the parentDetailsAdd
        let priceDetailsAdd = IncDec.parentNode;
        priceDetailsAdd.removeChild(IncDec)

        priceDetailsAdd.appendChild(addItem);
        

    }

    updateCartBtn(calculations)
    {
        // How to update the cart Btn
        console.log("Update Cart is called");
        // let myCart
        let data = calculations();
        if(data[1] == 0)
            document.getElementById("my-cart").innerHTML = `<p>My Cart</p>`
        else
            document.getElementById("my-cart").innerHTML = `<p>${data[1]} items</p> <p>₹ ${data[0]}</p>`; 

    }

    updatePaymentDetails(calculations,calculationsMRP)
    {
        let data = calculations();
        let mrp  = calculationsMRP();
        let p1 = document.getElementById("MRPpay1");
        let p2 = document.getElementById("pDiscount");
        let gTotal = document.getElementById("grandTotal");
        let finalResult = document.getElementById("paymentDetailsFinalResult");
        let spanAmt = document.getElementById("spanAmt");

        p1.innerHTML = `₹ ${mrp}`;
        p2.innerHTML = `₹ ${data[0]}`;
        gTotal.innerHTML = `₹ ${data[0]}`;
        finalResult.innerHTML = `${data[1]} items . ₹ ${data[0]}`;
        spanAmt.innerHTML = `₹ ${mrp}`;
    }
    
    // I need to add eventListeners on the incDecBtn
    OnIncDec(incrementHandler,decrementHandler,incDecBtn,addBtn,calculations)
    {
                
                let id = incDecBtn.id;
                let plusBtn  =  document.getElementById(`plus${id}`);
                let minusBtn =  document.getElementById(`minus${id}`);
                let valueField = document.getElementById(`val${id}`);

                //We need to update the cart button accordingly for every increase or decrease
                
                   
                    plusBtn.addEventListener("click", (e) => {
                        let itemVal = incrementHandler(id);
                        valueField.innerHTML = itemVal;
                        this.updateCartBtn(calculations);

                     })
                    
                    minusBtn.addEventListener("click", (e) => {
                        let itemVal = decrementHandler(id);
                        
                        if(itemVal == 0)
                        {
                            this.removeIncDec(incDecBtn,addBtn);
                        }
                        else{
                            valueField.innerHTML = itemVal;
                        }
                        this.updateCartBtn(calculations);
    
                    })            
    }

    //Adding a eventListener for the rest of the page 2 buttons

    quantitySelectorCartEventListener(incrementHandler,decrementHandler,isPresentInCart,basket,calculations,calculationsMRP)
    {
        let plusCart  = document.querySelectorAll(".plusCartBtn");
        let minusCart = document.querySelectorAll(".minusCartBtn");
        let valField  = document.querySelectorAll(".valCartBtn");
        let n = plusCart.length;

       
        
        for(let i=0; i<n; i++)
        {
            plusCart[i].addEventListener("click", (e) =>{


                let id = parseInt(e.target.id.substr(11));
                
                let itemVal = incrementHandler(id-1);
                valField[i].innerHTML = itemVal;
                this.updateCartBtn(calculations);
                this.updatePaymentDetails(calculations,calculationsMRP);

                
            })  
            
            minusCart[i].addEventListener("click", (e) =>{

                let id = parseInt(e.target.id.substr(12));
                let itemVal = decrementHandler(id-1);
                let basketIndex = isPresentInCart(id);
                if(itemVal == 0)
                {
                    window.location.reload();
                }
                else{
                    valField[i].innerHTML = itemVal;
                }
                this.updateCartBtn(calculations);
                this.updatePaymentDetails(calculations,calculationsMRP);
            })
        }
    }

    createPaymentSection(calculations,calculationsMRP)
    {
        let check = new checkout();
        let data = calculations();
        if(data[1] == 0)
        {
            let itemCart = document.getElementById("itemsAddedToCart");
            itemCart.innerHTML = "No item to show";
        }
        else
        {
            check.blinkitPayment(calculations,calculationsMRP);
        }
        
    }



}