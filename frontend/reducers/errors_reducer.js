import {combineReducers} from 'redux';
import sessionErrorsReducers from './session_errors_reducer'
import productErrorsReducer from "./products_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducers,
    products:productErrorsReducer
});

export default errorsReducer;