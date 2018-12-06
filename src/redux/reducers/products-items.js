import { GET_PRODUCT, SAVE_PRODUCTS } from "../actionTypes/cart-action-types";

const productsItems = (state = [], action) => {

    switch(action.type){
        case SAVE_PRODUCTS: 

        if(action.payload.cant){
            action.payload.cant += 1;
        } else {
            action.payload.cant = 1;
        }
        
        return state.filter(cartItem =>  cartItem.id !== action.payload.id).push(action.payload)

        case GET_PRODUCT:

        if(action.payload.cant > 1){
            action.payload.cant -= 1;
            return state.filter(cartItem =>  cartItem.id !== action.payload.id).push(action.payload)
        } else {
            return state.filter(cartItem => 
                cartItem.id !== action.payload.id)
        }

            
    }

    return state;
};

export default productsItems;
