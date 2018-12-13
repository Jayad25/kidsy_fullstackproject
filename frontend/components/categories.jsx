import React from 'react';

class categories extends React.Component{
    render(){
        return(<div className="category-div">
            <nav className="nav-category">
                <button>Clothes</button>
                <button>Toys</button>
                <button>Food</button>
                <button>Accessories</button>
                <button>Books</button>
                <button>Shoes</button>
            </nav>
        </div>
        )}
} 

export default categories;