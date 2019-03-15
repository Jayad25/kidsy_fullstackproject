

import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from '../search'
import CategoryForm from './category_form'



class Greeting extends React.Component{
  constructor(props){
    super(props)
    this.personalGreeting=this.personalGreeting.bind(this);
    this.sessionLinks=this.sessionLinks.bind(this);
    this.welcome=this.welcome.bind(this);
  }
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

      <Link to={`/users/${this.props.currentUser.id}`}><h2 className="username">
      {/* Hi, {this.props.currentUser.username.slice(0,6)}! */}
      <i className="fas fa-user-circle"><span>you</span></i>
      </h2></Link>

      <button className="logout-button" onClick={this.props.logout}><div className="logout-div">Log out</div></button>
    </div>
  );
 }

 welcome(){

  return this.props.currentUser ? this.personalGreeting() : this.sessionLinks()
 }
 render(){
   return (
     <div className="NavBarTotal">
       <nav className="NavBar">
         <div className="NavBarLeft">
           <Link to="/" className="header-link">
             <h1 className="logo">Kidsy</h1>
           </Link>
           <SearchForm search={this.props.searchProducts} />
         </div>

         <div className="NavbarRight">
           {this.welcome()}
           <Link to="/cart" className="cart-div">
             <i className="fas fa-shopping-cart" />
           </Link>
         </div>
       </nav>
       <CategoryForm category={this.props.categoryProducts} />
     </div>
   );}
};


export default Greeting;