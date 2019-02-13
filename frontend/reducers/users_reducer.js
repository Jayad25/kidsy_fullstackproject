import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER } from "../actions/user_actions";
import { RECEIVE_ALL_PRODUCTS, RECEIVE_PRODUCT } from "../actions/product_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:

      return Object.assign({}, state, {[action.payload.user.id]:action.payload.user});
    case RECEIVE_USER:
    
      return Object.assign({}, state, {[action.payload.user.id]:action.payload.user});
    case RECEIVE_ALL_PRODUCTS:
      // return action.products.sellers;
      return Object.assign({}, state, action.products.sellers)
    case RECEIVE_PRODUCT:
      return Object.assign({}, state, action.product.seller);
    default:
      return state;
  }
};

export default usersReducer;
