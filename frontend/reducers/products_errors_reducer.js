import { RECEIVE_PRODUCT,RECEIVE_PRODUCT_ERRORS} from '../actions/product_actions';

const productsErrorsReducer = (state = [],action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_PRODUCT:
            return []
        case RECEIVE_PRODUCT_ERRORS:
        return action.errors
        default:
            return state
    }
}

    export default productsErrorsReducer;