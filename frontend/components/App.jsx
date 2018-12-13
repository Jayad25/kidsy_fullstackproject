import React from 'react';
import { Provider } from 'react-redux';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import SearchForm from './search';

import {AuthRoute} from '../util/route_util';
import CenterDisplay from './center_display';


import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
  } from 'react-router-dom';

// const App = () => {
//   return (< div>
//     <div className="header">
//       <Link to="/">
//         <div className="logo">
//           Kidsy
//         </div>
//       </Link>
//       <SearchForm />
//       <div className="greeting">
//         <GreetingContainer />
//       </div>
//       <div>
//         <Route exact path="/" component={GreetingContainer}/>
//         <AuthRoute path="/login" component={LoginFormContainer} />
//         <AuthRoute path="/signup" component={SignupFormContainer} />
//       </div>
//     </div>
//     <div className="categories">
//     <hr></hr>
//       <ul>
//         <li>Gifts</li>
//         <li>Jewelry&Accessoried</li>
//         <li>Clothing & shoes</li>
//         <li>Home & living</li>
//         <li>Party</li>
//         <li>Toys</li>
//         <li>food</li>
//       </ul>
//     </div>
//     <hr></hr>
//   </div>
// )
// }

const App = () => {
  return (<div>
    
  <Switch>
    <Route exact path="/" component={GreetingContainer}/>
    <AuthRoute path="/login" component={LoginFormContainer} />
 <AuthRoute path="/signup" component={SignupFormContainer} />
  </Switch>
  <div className="search-head-title-wrap">
  <h1 className="center-header">If it’s handcrafted, vintage, custom, or unique, it’s on Kidsy.</h1>
  </div>
  <CenterDisplay />
  </div>
  )
}

export default App;