import {createStore, combineReducers} from 'redux';
import cartItems from './../reducers/cart-items';
import productsItems from './../reducers/products-items';

const rootReducers = combineReducers({
    cart: cartItems,
    product: productsItems
});

export default store = createStore(rootReducers);