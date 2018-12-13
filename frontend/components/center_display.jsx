import React from 'react';
import {Link} from 'react-router-dom';

class CenterDisplay extends React.Component{
    render(){
        return(
            <div>
                <Link to="/">
                <h2>
                    Clothes
                </h2>
                </Link>
            </div>
        )
    }

}

export default CenterDisplay;