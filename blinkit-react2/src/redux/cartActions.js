import {ADD_TO_CART, DELETE_ONE_FROM_CART, REMOVE_FROM_CART, CLEAR_CART} from "./cartActionTypes";


export const addToCart = (productName) => {
    return {
        type: ADD_TO_CART,
        payload : productName
    }
}

export const deleteOneFromCart = (productName) => {
    return {
        type: DELETE_ONE_FROM_CART,
        payload: productName
    }
}

export const removeFromCart = (productName) => {
    return {
        type: REMOVE_FROM_CART,
        payload: productName
    }
}

export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
}

