import {
    RECEIVE_ALL_CART_ITEMS,
    RECEIVE_CART_ITEM,
    REMOVE_CART_ITEM
} from '../actions/cart_actions'

const cartItemReducer = (state = {},action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ALL_CART_ITEMS:
            return action.cart_items
        case RECEIVE_CART_ITEM:
            return Object.assign({},state,{[action.cart_item.id]:action.cart_item})
        case REMOVE_CART_ITEM:
            const newState = Object.assign({},state);
            delete newState[action.cartItemId]
            return newState
        default:
            return newState
    }
}

export default cartItemReducer