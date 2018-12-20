import React from 'react';
import { Link } from 'react-router-dom';
// import "../../app/assets/images/"

class CenterDisplay extends React.Component {
  render(){
    return(
      <div className="center-advertisement">
        <a href="/#/products">
          <div className="left">
            <div className="inner-left">
              <h2 className="top">Toys</h2>
              <h2 className="middle">Toys are put on this Earth to be played with by a child</h2>
              <h3 className="bottom">Buy Now<i className="fas fa-greater-than"></i></h3>
            </div>
            <div className="inner-right">
            </div>
          </div>
          </a>
         
          <a href="/">
          <div className="right">
              <div className="right-top-1">
                <div className="right-top">

                </div>
              </div>
              <div className="right-bottom">
              <div className="right-bottom-text">Shop ready-to-ship-funds <i className="fas fa-greater-than" id="right-symbol"></i></div>
              </div>
              </div>
            </a>
          
      

      </div>
    )
  }
}

export default CenterDisplay;