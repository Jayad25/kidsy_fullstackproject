import React from 'react';
import { Provider } from 'react-redux';
import GreetingContainer from './greeting/greeting_container';
import ProductsContainer from './products/product_index_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import SearchForm from './search';
import ProductShowContainer from './products/product_show_container'

import {AuthRoute} from '../util/route_util';
import CenterDisplay from './center_display';
import MiddleDisplay from "./middle_display";
import Modal from './modal/modal'
import Homepage from './homepage'


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
    <Homepage />
    {/* <ProductsContainer /> */}
    {/* <ProductShowContainer /> */}
    <Route path="/products/:productId" component={ProductShowContainer} />
    <Route path="/products/" component={ProductsContainer} />
{/*   
    <Switch>
      <Route  exact path="/" component={Homepage}/>
      <Redirect to="/" />
    </Switch> */}
  
  </div>
  )
}

export default App;