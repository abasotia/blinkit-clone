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
        this.view.createFooter();
    }

}

let modelObj = new Model();
let viewObj = new View(modelObj.calculations());
const controllerCheck = new ControllerCheck(modelObj, viewObj);