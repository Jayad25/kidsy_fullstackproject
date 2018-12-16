import React from 'react';
import { Link } from 'react-router-dom';


const ProductIndexItem = ({ product }) => {
  // console.log(product)
  return (
    <li className="product items">
      <ul>
        <li><Link to={`/products/${product.id}`}><img className='product_img' src={product.img_url}/></Link></li>
        <li className='index productName'><Link to={`/products/${product.id}`} className="index productName">{product.title}</Link></li>
        <li className='index productCost'>${(product.price)}</li>
      </ul>
    </li>);
};

export default ProductIndexItem;
