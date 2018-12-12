import React from 'react';
import { Provider } from 'react-redux';
import GreetingContainer from './greeting/greeting_container'
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container'

import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
  } from 'react-router-dom';

const App = () => (
  <div>
    <div>
      <GreetingContainer />
    </div>
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
    </div>
)

export default App;