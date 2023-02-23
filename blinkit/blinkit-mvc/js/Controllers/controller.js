class Controller{
    constructor(model,view)
    {
        this.model = model;
        this.view = view;
        console.log(this.model);
        this.view.createNavBar();
        this.model.printProductData();
        this.view.createNavMenu();
        //this.view.createSideBar();
        this.utilSearchBasket = this.model.isPresentInCart.bind(this.model);
        //this.view.createMainBody(this.model.sendProducts(),this.model.basket,this.utilSearchBasket);
        this.view.searchItem(this.model.productData,this.utilSearchBasket,this.model.addToCart.bind(this.model),this.model.incItem.bind(this.model), this.model.decItem.bind(this.model), this.model.basket,this.model.calculations.bind(this.model));
        this.view.createFooter();
        this.view.printView();
        
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
        const controller = new Controller(modelObj, viewObj);
    });


