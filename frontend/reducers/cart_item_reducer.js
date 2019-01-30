import merge from 'lodash/merge';

import { RECEIVE_CART, RECEIVE_CART_PRODUCT, REMOVE_CART_PRODUCT } from '../actions/product_actions';


const productsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CART:
            return merge({}, state, action.payload.cartItems);

        case RECEIVE_CART_PRODUCT:
            return merge({}, state, {
                [action.payload.cart.id]: action.payload.cartItems
            });
        case REMOVE_CART_PRODUCT:
            let newState = merge({}, state);
            delete newState[action.cartProductId];
            return newState;
        default:
            return state;
    }
};

export default productsReducer;