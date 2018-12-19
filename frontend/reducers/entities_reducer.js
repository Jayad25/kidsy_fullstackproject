import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import productsReducer from './products_reducer';
// import shoppingCart from './'


const entitiesReducer = combineReducers({
    users: usersReducer,
    products:productsReducer,
    // seller:seller
    // shoppingCart:shoppingCart
})


export default entitiesReducer;