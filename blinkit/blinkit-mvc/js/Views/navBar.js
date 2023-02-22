class NavigationBar{
    constructor(time,place,content){
        this.logoBlinkit = "../../images/Screenshot.png";
        this.cartIcon = "../../images/cart.png";
        this.searchIcon = "../../images/loupe.png"
        this.navBarMainDiv = document.createElement("div"); 
        this.time = time;
        this.place = place;
        this.content = content;
    }
    blinkitLogoTimeLoc()
    {
        let tLContainer = document.createElement("div");
        tLContainer.className = "tl-container";
        let Blogo = this.blinkitLogo();
        let BDeliveryTime = this.blinkitDeliveryTime();
        let BDeliveryLocation = this.blinkitDeliveryLocation();
        let container = document.createElement("div");
        container.className = "timeLocation";
        container.appendChild(BDeliveryTime);
        container.appendChild(BDeliveryLocation);
        tLContainer.appendChild(Blogo);
        tLContainer.appendChild(container);
        return tLContainer;
    }


    blinkitNavMain(){
         // Main Div
        let Main = document.createElement("div");
        Main.className = "navBar";

        let blinkitLeft = this.blinkitLogoTimeLoc(); 
        let blinkitMid = this.blinkitSearch();
        let blinkitEnd = this.blinkitLoginCartContainer();

        Main.appendChild(blinkitLeft);
        Main.appendChild(blinkitMid);
        Main.appendChild(blinkitEnd);


        return Main;
    }

    blinkitLogo(){
        let logoDiv = document.createElement("div");
        logoDiv.className = "logo-div";
        logoDiv.innerHTML = `<a href="index.html"><img id="blinkit-logo" src=${this.logoBlinkit}></img></a>`;
        return logoDiv;
    }
    blinkitDeliveryTime(){
        let deliveryTime = document.createElement("div");
        deliveryTime.className = "delivery-time";
        deliveryTime.innerHTML= `Delivery in ${this.time}`;
        return deliveryTime;
    }
    blinkitDeliveryLocation(){
        let deliveryLocation = document.createElement("div");
        deliveryLocation.className = "delivery-location";
        deliveryLocation.innerHTML = `${this.place}`;
        return deliveryLocation;
    }





    blinkitSearch(){
        let searchDiv = document.createElement("div");
        searchDiv.className = "searchDiv";
        let blinkitSearchInput = this.blinkitSearchInput();
        searchDiv.appendChild(blinkitSearchInput);
        return searchDiv;
    }
    blinkitSearchInput(){
        let inputSearch = document.createElement("input");
        inputSearch.className = "search-input";
        inputSearch.type = "search";
        inputSearch.placeholder="Search...";
        return inputSearch;
    }
    

    blinkitLoginCartContainer()
    {
        let LoginCartContainer = document.createElement("div");
        let btnLogin = this.blinkitBtnLogin();
        let blinkitBtnCart = this.blinkitCart();
        LoginCartContainer.className = "LoginCart";
        LoginCartContainer.appendChild(btnLogin);
        LoginCartContainer.appendChild(blinkitBtnCart);

        return LoginCartContainer;
    }

    blinkitBtnLogin()
    {
        let btnLogin = document.createElement("div");
        btnLogin.id = "Login";
        btnLogin.innerHTML = `<a href="#">Login</a>`;
        return btnLogin;
    }


    blinkitCart(){
        let btnCartContainer = this.blinkitBtnCartContainer();
        let myCart = this.blinkitBtnCart();
        let container = document.createElement("div");
        container.className = "cart-mycart";
        container.appendChild(btnCartContainer);
        container.appendChild(myCart);
        return container;
    }

    blinkitBtnCartContainer(){
        let btnCartContainer = document.createElement("div");
        btnCartContainer.id = "my-cart-container";
        btnCartContainer.innerHTML = `<img src=${this.cartIcon}>`;
        return btnCartContainer;
    }
   
    blinkitBtnCart(){
        let myCart = document.createElement("div");
        myCart.id = "my-cart";
        if(this.content[1] ===0)
            myCart.innerHTML = "My Cart";
        else
            myCart.innerHTML = `<p>${this.content[1]} items</p> <p>₹ ${this.content[0]}</p>`;
        return myCart;
    }
}