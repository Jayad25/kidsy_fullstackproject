import React from 'react';
import { Link } from 'react-router-dom';
// import "../../app/assets/images/"

class CenterDisplay extends React.Component {
  render(){
    return(
      <div className="center-advertisement">
        <a href="/">
          <div className="left">
            <div className="inner-left">
              <h2 className="top">Toys</h2>
              <h2 className="middle">Toys are put on this Earth to be played with by a child</h2>
              <h3 className="bottom">Buy Now</h3>
            </div>
            <div className="inner-right">
              
            </div>
          </div>
        </a>
        <div className="right">

        </div>

      </div>
    )
  }
}

export default CenterDisplay;