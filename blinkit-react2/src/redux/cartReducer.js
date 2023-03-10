let initialState = {
    cart: {
                "Lemon": 2,
                "Carrots": 2,
                "Garlic": 2,
                "Onion": 2,
                "Ginger": 2,
                "Tomato": 2,
                "Mushrooms": 2,
                "Potato": 2,
                "Green Chillies": 2
    }
}

const cartReducer = (state = initialState, action) => {
    let tempCart
    
    switch(action.type)
    {
        case 'ADD_TO_CART':
           console.log(state);
           tempCart = state.cart;
           tempCart[action.payload] += 1;
           return {
                cart: { ...tempCart }
            } 
        case 'DELETE_ONE_FROM_CART':
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
        
        case 'REMOVE_FROM_CART':
            console.log("ITEM REMOVED FROM CART");
            tempCart = state.cart
            delete tempCart[action.payload]
            return {
                cart : {
                    ...tempCart
                }
            }
       
        case 'CLEAR_CART':
            tempCart = {};
            return {
                cart : { ...tempCart }
            }
            
        
        default:
            return state;
    }

}

export default cartReducer;
