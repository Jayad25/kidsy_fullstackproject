

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
        <div className="headerright">
          <Link className="sell-link" to="/" className="Register">
          Sell on Eatsy
        </Link>
        <Link to="/signup" className="Register">Register</Link>
      <Link to="/login" ><button className="login">Sign in</button></Link>
      <button onClick={() => this.props.demoLogin()} className="login">Demo User</button>
    </div>
    )
  }
   personalGreeting(){
     return(
    <div className="righit-after-signin">
      <Link className="sell" to="/" className="Register">
          Sell on Eatsy
        </Link>
      <h2 className="username">Hi, {this.props.currentUser.username}!</h2>
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
     </div>
     </nav>
     <CategorieForm />
   </div>
   )}
};


export default Greeting;