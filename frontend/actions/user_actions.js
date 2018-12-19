import * as UserApiUtil from "../util/user_api_util";

export const RECEIVE_USER = "RECEIVE_USER";

export const fetchUser = id => dispatch => {
  return UserApiUtil.fetchUser(id).then(payload => dispatch(receiveUser(payload)));
};

const receiveUser = payload => {
  return {
    type: RECEIVE_USER,
    payload
  };
};