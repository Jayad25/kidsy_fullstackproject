import React from 'react';
import { withRouter } from 'react-router-dom'

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
      
    return (
      <div className="category-div">
        <nav className="nav-category">
          <button onClick={() => this.props.history.push(`/category/Clothes`)}>
            Clothes
          </button>
          <button>Toys</button>
          <button>Food</button>
          <button>Accessories</button>
          <button>Books</button>
          <button>Shoes</button>
        </nav>
      </div>
    );
  }
}

export default withRouter(CategoryForm);