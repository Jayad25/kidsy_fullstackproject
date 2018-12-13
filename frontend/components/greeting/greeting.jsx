// import React from 'react';
// import { Link } from 'react-router-dom';

// const Greeting = ({currentUser,logout}) => {
//     const sessionLinks = () => (
//         <div>
//         <Link to ={"/login"}>Login</Link>
//         <Link to ={"/signup"}>Register</Link>
//         </div>
//     )
//     const personalGreeting = () => (
//         <div>
//             <h2>{currentUser.username}</h2>
//             <button onClick={() => logout}></button>
//         </div>
//     )
//     return currentUser ? personalGreeting() :sessionLinks()

// }

// export default Greeting

import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout,demoLogin }) => {
  const sessionLinks = () => (
        <div className="headerright">
        <Link to="/signup" className="login">Register</Link>
      <Link to="/login" className="login"><button className="login">Sign in</button></Link>
      <button onClick={() => demoLogin()} className="login">Demo User</button>
      <i className="fas fa-shopping-cart"></i>
    </div>
  )
  const personalGreeting = () => (
    <div>
      <h2 >Hi, {currentUser.username}!</h2>
      <button  onClick={logout}>Log Out</button>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks()
};


export default Greeting;