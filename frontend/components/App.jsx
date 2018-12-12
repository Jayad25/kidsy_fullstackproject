import React from 'react';
import { Provider } from 'react-redux';
import GreetingContainer from './greeting/greeting_container'
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
  } from 'react-router-dom';

const App = () => (
    <div>
      <GreetingContainer />
    </div>
)

export default App;