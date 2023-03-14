import { ADD_TO_CART, INCREASE_PRODUCT_UNIT, DECREASE_PRODUCT_UNIT } from "./cartActions"

export const addToCart = (productName) => {
    return {
        type : ADD_TO_CART,
        payload: productName
    }
}

export const increaseProductToCart = (productName) => {
    return {
        type: INCREASE_PRODUCT_UNIT,
        payload: productName
    }
}

export const  decreaseProductCart = (productName) => {
    return {
        type: DECREASE_PRODUCT_UNIT,
        payload: productName
    }
}