

import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from '../search'
import CategorieForm from '../categories'



class Greeting extends React.Component{
  constructor(props){
    super(props)
    this.personalGreeting=this.personalGreeting.bind(this);
    this.sessionLinks=this.sessionLinks.bind(this);
    this.welcome=this.welcome.bind(this);
    }
//  ({ currentUser, logout,demoLogin }) => {
  sessionLinks(){
  return(
    
        <nav className="headerright">
          <Link className="sell-link" to={"/products/new"} className="Register">
          Sell on Kidsy
        </Link>
        <button onClick={()=>this.props.openModal('signup')} className="Register">Register</button>
      <button onClick={()=>this.props.openModal('login')} className="login">Sign in</button>
      <button onClick={() => this.props.demoLogin()} className="login">Demo User</button>
    </nav>
    )
  }
   personalGreeting(){
     return(
    <div className="right-after-signin">
      <Link className="sell" to={"/products/new"} className="Register">
          Sell on Kidsy
        </Link>
      <h2 className="username">Hi, {this.props.currentUser.username.slice(0,6)}!</h2>
      <button className="logout-button" onClick={this.props.logout}><div className="logout-div">Log out</div></button>
    </div>
  );
 }

 welcome(){
  return this.props.currentUser ? this.personalGreeting() : this.sessionLinks()
 }
 render(){
   return(<div className="NavBarTotal">
   <nav className="NavBar"> 
     <div className="NavBarLeft">
     <Link to="/" className="header-link">
      <h1 className="logo">Kidsy</h1>
     </Link>
     <SearchForm />
     </div>
     
     <div className="NavbarRight"> 
     {this.welcome()}
      <i className="fas fa-shopping-cart"></i></div>
     </nav>
     <CategorieForm />
   </div>
   )}
};


export default Greeting;