import { connect } from 'react-redux';
import React from 'react'

import { logout,login } from '../../actions/session_actions';
import {openModal} from '../../actions/modal_actions'
import Greeting from './greeting';

const mapStateToProps = ({ session, entities: { users } }) => {
    // console.log("session" + session);
    // console.log("user"+users)
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  demoLogin: () => dispatch(login({user:{username: 'username', password: 'password'}}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);