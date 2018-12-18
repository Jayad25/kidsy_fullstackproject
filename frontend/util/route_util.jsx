import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import Modal from '../components/modal/modal';
import {openModal} from '../actions/modal_actions'

const Auth = ({component: Component, path, loggedIn, exact}) => (
    <Route path={path} exact={exact} render={(props) => (
      !loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    )}/>
  );

  const Protected = ({ component: Component, path, loggedIn, exact,redirectToModal }) => (
    <Route path={path} exact={exact} render={(props) => (
        loggedIn ? (
            <Component {...props} />
        ) : (
          redirectToModal()
            )
    )} />
);
  
  const mapStateToProps = state => {
    return {loggedIn: Boolean(state.session.id)};
  };
  const mapDispatchToProps = dispatch => ({
    redirectToModal: () => dispatch(openModal("login"))
  });
  
  export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

  export const ProtectedRoute = withRouter(connect(mapStateToProps,mapDispatchToProps)(Protected));