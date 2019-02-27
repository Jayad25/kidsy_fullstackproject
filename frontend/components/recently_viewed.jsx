import React from 'react';
import RecentlyViewedIndexItem from './recently_viewed_index_item'

class RecentlyViewed extends React.Component {

constructor(props) {
    super(props);
    this.state = { products: []};
  }

    componentDidMount(){
    this.props.fetchProducts().then(() =>
    this.setState({ products: this.props.products.slice(0, 5)}))
  }

  render () {
    let products = this.state.products.map(product => {
      return (
        <RecentlyViewedIndexItem
          key={`product-${product.id}`}
          product={product} 
        />
      );
    });
    return (
      
      <div className="product_items">
        <p>Popular Items</p>
        <ul className="recently_viewes_items">
          {products}
        </ul>
      </div>
    );
  }
}

export default RecentlyViewed;
