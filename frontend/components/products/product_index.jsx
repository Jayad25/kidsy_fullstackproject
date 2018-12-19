import React from 'react';
import ProductIndexItem from './product-index-item'

class ProductIndex extends React.Component {
  componentDidMount(){
    this.props.fetchProducts();
  }
  render () {
    let products = this.props.products.map(product => {
      return (
        <ProductIndexItem
          key={`product-${product.id}`}
          product={product} 
          deleteProduct={this.props.deleteProduct}/>
      );
    });
    return (
      <div className="product_items">
        Products Lists
        <ul className="product-list">
          {products}
        </ul>

      </div>
    );
  }
}

export default ProductIndex;
