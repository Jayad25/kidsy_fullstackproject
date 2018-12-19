import React from 'react';
import { Provider } from 'react-redux';
import GreetingContainer from './greeting/greeting_container';
import ProductsContainer from './products/product_index_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import SearchForm from './search';
import ProductShowContainer from './products/product_show_container';
import CreateProductForm from "./products/create_product_container";
import EditProductContainer from "./products/edit_product_container";
import UserShowContainer from "./users/user_show_container";

import {AuthRoute,ProtectedRoute} from '../util/route_util';
import CenterDisplay from './center_display';
import MiddleDisplay from "./middle_display";
import Modal from './modal/modal'
import Homepage from './homepage'


import {
    Route,
    Redirect,
    Switch,
    HashRouter
  } from 'react-router-dom';

const App = () => {
  return (<div className="page">
    
    <Modal />
    <GreetingContainer />
    

  <Switch>
    <Route  exact path="/" component={Homepage}/>
    <Route exact path="/users/:userId" component={UserShowContainer} />
    <ProtectedRoute  exact path="/products/new" component={CreateProductForm} />  
    <Route  exact path="/products/:productId" component={ProductShowContainer} /> 
    <Route exact path="/products/" component={ProductsContainer} />
    <Route  path="/products/:productId/edit" component={EditProductContainer} />
    
    <Redirect to="/" />
  </Switch>
    
  </div>
  )
}

export default App;