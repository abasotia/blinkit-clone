import ProductData from "../assets/Data/ProductData.js"

let initialState = {
   
    cart: {}
}

const cartReducer = (state = initialState, action) => {
    let tempCart
    
    switch(action.type)
    {
        case 'ADD_TO_CART':
           console.log(state);
           tempCart = state.cart;
           tempCart[action.payload] = 1;
           return {
                cart: { ...tempCart }
            } 
        case 'DECREASE_PRODUCT_UNIT':
            console.log("ITEM TO BE REMOVED FROM CART");
            tempCart = state.cart;
            tempCart[action.payload] -= 1;
            if(tempCart[action.payload] === 0)
               delete tempCart[action.payload] 
            
            return {
                cart: {
                    ...tempCart
                }
        };

        case 'INCREASE_PRODUCT_UNIT':
            tempCart = state.cart;
            tempCart[action.payload] += 1;
            if(tempCart[action.payload] === 0)
                delete tempCart[action.payload]
            return{
                cart : {
                    ...tempCart
                }
            }
        
            
        
        default:
            return state;
    }

}

export default cartReducer;
