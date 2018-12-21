import {
    RECEIVE_ALL_CART_ITEMS,
    RECEIVE_CART_ITEM,
    REMOVE_CART_ITEM
} from '../actions/cart_item_actions'

// import {RECEIVE_CURRENT_USER,LOGOUT_CURRENT_USER} from '../actions/session_actions';
import { merge } from 'lodash';


const cartItemReducer = (state = {},action) => {
    Object.freeze(state)
    switch (action.type) {
        // case RECEIVE_CURRENT_USER:
        //     return action.currentUser.cart;
        case RECEIVE_ALL_CART_ITEMS:
            let newState = Object.assign({}, state);
            let mergeState = merge({}, newState.cartItems, action.cart_items);
            newState.cartItems = mergeState;
        case RECEIVE_CART_ITEM:
            return Object.assign({},state,{[action.cart_item.id]:action.cart_item})
        case REMOVE_CART_ITEM:
            let newStat = Object.assign({},state);
            delete newStat.cartItems[action.cartItemId]
            return newStat
        // case LOGOUT_CURRENT_USER:
        //     return {cartItems: {}};
                                                                                                                                                                    
        default:
            return state
    }
}

export default cartItemReducer