import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import productsReducer from './products_reducer';
import cartItemReducer from './cart_item_reducer';
import cartItemReducer from "./cart_item_reducer";
import cart from "./cart_reducer";



const entitiesReducer = combineReducers({
    users: usersReducer,
    products:productsReducer,
    cartItem:cartItemReducer,
    cart:cart
})


export default entitiesReducer;