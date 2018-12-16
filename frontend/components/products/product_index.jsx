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
          product={product} />
      );
    });
    return (
      <div className="product_items">
        All Products
        <ul>
          {products}
        </ul>

      </div>
    );
  }
}

export default ProductIndex;
