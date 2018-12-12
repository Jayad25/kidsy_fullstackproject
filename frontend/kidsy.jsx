import React from 'react';
import ReactDOM from 'react-dom';
import {login,logout,signup} from './actions/session_actions' 
import configureStore from './store/store'

document.addEventListener("DOMContentLoaded",()=>{
    window.login=login
    window.signup=signup
    window.logout=logout
    const root = document.getElementById("root");
    const store=configureStore();
    window.getState = store.getState
    window.dispatch=store.dispatch
    ReactDOM.render(<h1>Kidsy</h1>,root)
})