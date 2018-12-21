import React from 'react';
import ReactDOM from 'react-dom';
import {fetchProducts} from './actions/product_actions' 
import configureStore from './store/store'
import Root from './components/root'
import {createProduct} from './util/product_api_util'

document.addEventListener("DOMContentLoaded",()=>{
    window.fetchProducts=fetchProducts;
    const root = document.getElementById("root");
    let store;
    window.createProduct=createProduct;
    if (window.currentUser) {
        // debugger
    const preloadedState = {
        entities: {
            users:{[window.currentUser.id]:window.currentUser}},
        session: { id: window.currentUser.id}
    }
    store = configureStore(preloadedState)
    delete window.currentUser
    }else{
        store=configureStore();
    }
        
    window.getState = store.getState
    window.dispatch=store.dispatch
    ReactDOM.render(<Root store={store}/>,root)
})