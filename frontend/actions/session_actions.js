import * as SessionUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveCurrentUser = payload => ({
    type: RECEIVE_CURRENT_USER,
    payload
})
const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const login = user => dispatch => (
    SessionUtil.login(user).then(payload=>dispatch(receiveCurrentUser(payload)),
    err => dispatch(receiveErrors(err.responseJSON)))
)

export const signup = user => dispatch => (
    SessionUtil.signup(user).then(user =>{
      
        return  dispatch(receiveCurrentUser(user))},
    err=>{
           
        return dispatch(receiveErrors(err.responseJSON))})
)

export const logout = () => dispatch => (
    SessionUtil.logout().then(
        
        user=>dispatch(logoutCurrentUser()),
    err=>dispatch(receiveErrors(err.responseJSON)))
)

export const clearErrors = () => dispatch => {
   
    dispatch(receiveErrors([]))
}

