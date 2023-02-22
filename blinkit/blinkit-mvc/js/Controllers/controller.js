class Controller{
    constructor(model,view)
    {
        this.model = model;
        this.view = view;
        console.log(this.model);
        this.view.createNavBar();
        this.model.printProductData();
        this.view.createNavMenu();
        this.view.createSideBar();
        this.utilSearchBasket = this.model.isPresentInCart.bind(this.model);
        this.view.createMainBody(this.model.sendProducts(),this.model.basket,this.utilSearchBasket);
        this.view.createFooter();
        this.view.printView();
        this.view.changeAddBtn(this.model.addToCart.bind(this.model),this.model.incItem.bind(this.model), this.model.decItem.bind(this.model), this.utilSearchBasket, this.model.basket,this.model.calculations.bind(this.model));
    }   
}
let modelObj = new Model();
let viewObj  = new View(modelObj.calculations());
const controller = new Controller(modelObj, viewObj);


