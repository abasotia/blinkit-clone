class ControllerCheck{

    constructor(model,view)
    {
        this.model = model;
        this.view = view;   
        this.view.createNavBar();
        this.view.createNavMenu();
        this.view.createCheckout(this.model.basket,this.model.calculations.bind(this.model));
        
        this.view.quantitySelectorCartEventListener(this.model.incItem.bind(this.model),
                                                    this.model.decItem.bind(this.model),
                                                    this.model.isPresentInCart.bind(this.model),
                                                    this.model.basket,
                                                    this.model.calculations.bind(this.model),
                                                    this.model.calculationsMRP.bind(this.model));

        this.view.createPaymentSection(this.model.calculations.bind(this.model),
                                this.model.calculationsMRP.bind(this.model));
        this.view.clearCart(this.model.basket);
        this.view.removeItem(this.model.isPresentInCart.bind(this.model),
                             this.model.removeItemFromBasket.bind(this.model));                                         
        this.view.createFooter();
    }       

}

let data ;
let promise = fetch("./js/ProductData.json");
promise.then(function(response){
    if(response.status == 200)
            return response.json();
    else
        console.log("Oops could not fetch data");
    }).then(function (result){
        data = result;
    }).finally(() => {
        let modelObj = new Model(data);
        let viewObj  = new View(modelObj.calculations());
        const controllerCheck = new ControllerCheck(modelObj, viewObj);

    });