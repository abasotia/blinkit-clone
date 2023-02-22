class Model{
    constructor()
    {
        this.productData = [

            {
                id: "1",
                image: "../../images/17748a.jpg",
                productName: "Lemon",
                amountInKg: "1kg",
                newPrice: "30",
                originalPrice: "38",
                units: 0
            },
            {
                id: "2",
                image: "../../images/23383a.jpg",
                productName: "Carrots",
                amountInKg: "1kg",
                newPrice: "30",
                originalPrice: "38",
                units: 0
            },
            {
                id: "3",
                image: "../../images/355004a.jpg",
                productName: "Garlic",
                amountInKg: "1kg",
                newPrice: "30",
                originalPrice: "38",
                units: 0
            },
            {
                id: "4",
                image: "../../images/391306a.avif", 
                productName: "Onion",
                amountInKg: "1kg",
                newPrice: "30",
                originalPrice: "38",
                units: 0
            },
            {
                id: "5",
                image: "../../images/421703a.jpg",
                productName: "Ginger",
                amountInKg: "1kg",
                newPrice: "30",
                originalPrice: "38",
                units: 0
            },
            {
                id: "6",
                image: "../../images/445675a.jpg",
                productName: "Lemon",
                amountInKg: "1kg",
                newPrice: "30",
                originalPrice: "38",
                units: 0
            },
            {
                id: "7",
                image: "../../images/253317a.jpg",
                productName: "Mushrooms",
                amountInKg: "1kg",
                newPrice: "30",
                originalPrice: "38",
                units: 0
            },
            {
                id: "8",
                image: "../../images/391305a.jpg",
                productName: "Potato",
                amountInKg: "1kg",
                newPrice: "30",
                originalPrice: "38",
                units: 0
            },
            {
                id: "9",
                image: "../../images/423735a.jpg",
                productName: "Green Chillies",
                amountInKg: "1kg",
                newPrice: "30",
                originalPrice: "38",
                units: 0
            }
        ]

        this.basket = JSON.parse(localStorage.getItem("data")) || [];
    }

    sendProducts ()
    {
        return this.productData;
    }
    sendBasket()
    {
        return this.basket;
    }

    setLocalStorage()
    {
        localStorage.setItem("data", JSON.stringify(this.basket));
    }

    calculationsMRP()
    {
        let basket = this.basket
        let products = this.productData;

        let N = basket.length;
        
        let price = 0;
        let items = 0;

        for(let i=0; i<N; i++)
        {
            // console.log("Price ", parseInt(basket[i].newPrice));
            // console.log(`Items ${basket[i].productName}`, basket[i].units);
            let item = parseInt(basket[i].units);
            price += (parseInt(basket[i].originalPrice) * item);
            items += item;
        }

        return price;
    }


    calculations()
    {
        let basket = this.basket
        let products = this.productData;

        let N = basket.length;
        
        let price = 0;
        let items = 0;

        for(let i=0; i<N; i++)
        {
            // console.log("Price ", parseInt(basket[i].newPrice));
            // console.log(`Items ${basket[i].productName}`, basket[i].units);
            let item = parseInt(basket[i].units);
            price += (parseInt(basket[i].newPrice) * item);
            items += item;
        }

        return [price, items];
    }

    isPresentInCart(id)
    {
        let basket = this.basket;
        let M = basket.length;

        for(let i=0; i<M; i++)
        {
            if(basket[i].id == id)
            {
                return i;
            }
        }
        return -1;
    }


    addToCart(index)
    {
        console.log("value of this in models ",this);
        let products = this.productData;
        let basket = this.basket;
        // id is used for the item id that starts with 1;
        // index is used for the index of the productList;
        let id = products[index].id;
        

        let N = products.length;
        let M = basket.length;
        
        // One product has been added;
        products[index].units = 1;

        if(this.isPresentInCart(id) == -1)
            basket.push(products[index]);
        
        this.setLocalStorage();
        return this.calculations();
       
    }

    incItem(index)
    {
        let products = this.productData;
        let basket = this.basket;
        
       
       let basketIndex = this.isPresentInCart(products[index].id);

        // Increment the products[index].units by 1;
        console.log("basket",basket);
        basket[basketIndex].units += 1;
        
        products[index].units = basket[basketIndex].units;
        
        this.setLocalStorage();
        this.calculations();
        this.calculationsMRP();

        return basket[basketIndex].units;

    }
    
    decItem(index)
    {
        let products = this.productData;
        let basket = this.basket;

        let basketIndex = this.isPresentInCart(products[index].id);
        console.log("basket",basket);
        basket[basketIndex].units -= 1;
        products[index].units = basket[basketIndex].units; 
        if(basket[basketIndex].units == 0)
        {
            // We need to remove the element from the cart
            // How to remove the element from the cart ?

            basket.splice(basketIndex,1);
            // removed from basket;

        }
        
        this.setLocalStorage();
        this.calculations();
        this.calculationsMRP();

        return products[index].units ;
    }

    printProductData(){
        console.log(this.productData);
    }
}