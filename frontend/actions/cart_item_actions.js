import * as CartItemApiUtil from '../util/cart_item_api_util';

export const RECEIVE_ALL_CART_ITEMS = "RECEIVE_ALL_CART_ITEMS";
export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM";
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'

const receiveAllCartItems = cartItems => {
    type:"RECEIVE_ALL_CART_ITEMS",
    cartItems
}

const receiveCartItem  = cartItem => {
    type:"RECEIVE_CART_ITEM",
    cartItem
}

const removeCartItem = cartItemId => {
    type:REMOVE_CART_ITEM,
    cartItemId
}


export const fetchCartItems= () => dispatch => (
    CartItemApiUtil.fetchCartItems().
    then(cartItems=>dispatch(receiveAllCartItems(cartItems)))
);

export const fetchCartItem= (id) => dispatch => (
    CartItemApiUtil.fetchCartItem(id).
    then(cartItem=>dispatch(receiveCartItem(cartItem)))
);

export const createCartItem = (cartItem) => dispatch => (
    CartItemApiUtil.createCartItem(cartItem).
    then(cartItem => dispatch(receiveCartItem(cartItem)))
)

export const deleteCartItem = cartItemId => dispatch => (
    CartItemApiUtil.deleteCartItem(cartItemId).
    then(cartItem => dispatch(removeCartItem(cartItem.id)))
)