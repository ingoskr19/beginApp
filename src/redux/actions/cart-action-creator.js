import { REMOVE_FROM_CART, ADD_TO_CART } from "../actionTypes/cart-action-types";


export function addProductToCart(product){
    return { type: ADD_TO_CART, payload: product }
}

export function removeProductFromCart(product){
    return { type: REMOVE_FROM_CART, payload: product }
}