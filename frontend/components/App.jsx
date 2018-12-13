import React from 'react';
import { Provider } from 'react-redux';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import SearchForm from './search';

import {AuthRoute} from '../util/route_util'


import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
  } from 'react-router-dom';

const App = () => (
  <div>
    <div className="header">
      <Link to="/">
        <div className="logo">
          Kidsy
        </div>
      </Link>
      <SearchForm />
      <div className="greeting">
        <GreetingContainer />
      </div>
      <div>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
      </div>
    </div>
    <div className="categories">
    <hr></hr>
      <ul>
        <li>Gifts</li>
        <li>Jewelry&Accessoried</li>
        <li>Clothing & shoes</li>
        <li>Home & living</li>
        <li>Party</li>
        <li>Toys</li>
        <li>food</li>
      </ul>
    </div>
    <hr></hr>
  </div>
)

export default App;