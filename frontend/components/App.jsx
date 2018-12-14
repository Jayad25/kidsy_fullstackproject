import React from 'react';
import { Provider } from 'react-redux';
import GreetingContainer from './greeting/greeting_container';
import ProductsContainer from './products/product_index_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import SearchForm from './search';

import {AuthRoute} from '../util/route_util';
import CenterDisplay from './center_display';
import MiddleDisplay from "./middle_display";
import Modal from './modal/modal'


import {
    Route,
    Redirect,
    Switch,
    // Link,
    HashRouter
  } from 'react-router-dom';

const App = () => {
  return (<div className="page">
    
    <Modal />
    <GreetingContainer />
    {/* <ProductsContainer /> */}
    
  
    <switch>
      {/* <Route  path="/" component={GreetingContainer}/> */}
      <Redirect to="/" />
    </switch>
  <div className="search-head-title-wrap">
  <h1 className="center-header">If it’s handcrafted, vintage, custom, or unique, it’s on Kidsy.</h1>
  </div>
  <CenterDisplay />
  {/* <MiddleDisplay /> */}
  </div>
  )
}

export default App;