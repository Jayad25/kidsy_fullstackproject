import React from 'react';
import ProductsContainer from './products/product_index_container';
import GreetingContainer from './greeting/greeting_container';
import CenterDisplay from './center_display';
import RecentlyViewedContainer from './recently_viewed_containe';
class Homepage extends React.Component{
    render(){
       return( <>
         
        <div className="search-head-title-wrap">
  <h1 className="center-header">If it’s handcrafted, vintage, custom, or unique, it’s on Kidsy.</h1>
  </div>
  <CenterDisplay />
  <RecentlyViewedContainer />
  <div className="kidsy-banner"></div>
        </>
    )}
}

export default Homepage;