import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes/cart-action-types";

const cartItems = (state = [], action) => {
    switch(action.type){
        case ADD_TO_CART:
            state = state.filter(item => item._id !== action.payload._id);
            
            if(action.payload.cant>0){
                state.push(action.payload);
            }

            return state;
        case REMOVE_FROM_CART:
            return state.filter(cartItem =>  cartItem._id !== action.payload._id);
    }

    return state;
};

export default cartItems;
