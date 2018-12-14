import React from 'react';
import ProductIndexItem from './product-index-item'

class ProductIndex extends React.Component {
  componentDidMount(){
    this.props.fetchProducts();
  }
  render () {
    const products= this.props.products.map(product=> <ProductIndexItem product={product}/>)
    return (
      <div>
        <ul>
          {products}
        </ul>

      </div>
    );
  }
}

export default ProductIndex;
