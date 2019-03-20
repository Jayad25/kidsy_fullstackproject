import { connect } from 'react-redux';
import React from 'react'

import { logout,login } from '../../actions/session_actions';
import {openModal} from '../../actions/modal_actions'
import Greeting from './greeting';
import { searchProducts, categoryProducts} from '../../actions/product_actions';

const mapStateToProps = ({ session, entities: { users } }) => {

  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => {

  return {
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    searchProducts: title => dispatch(searchProducts(title)),
    categoryProducts: type => dispatch(categoryProducts(type)),
    demoLogin: () =>
      dispatch(
        login({ user: { username: "username", password: "password" } })
      )
  };};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);