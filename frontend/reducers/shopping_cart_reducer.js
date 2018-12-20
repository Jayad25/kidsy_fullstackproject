import { RECEIVE_CART_ITEMS, REMOVE_CART_ITEM } from '../actions/cart_item_actions'

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

  const initialState = {
    products: {},
    cart: {},
  };

  const shoppingCartReducer = (oldState = initialState, action) => {
    Object.freeze(oldState);
    switch (action.type) {
      case RECEIVE_CART_ITEMS:
        return action.payload.cart_items;
      case RECEIVE_CART_ITEM:
        return Object.assign({},oldState, {[action.item.product_id]: action.item});
      case REMOVE_CART_ITEM:
        let newState = Object.assign({}, oldState);
        delete newState[action.id];
        return  newState;
      default:
        return oldState;

    }
  };

export default shoppingCartReducer;