import React from 'react';
import { Link } from 'react-router-dom';
// import { deleteProduct } from '../../util/product_api_util';


const ProductIndexItem = ({ product,deleteProduct }) => {

  return (
    <li className="product items">
    
        <li><Link to={`/products/${product.id}`}><img className='product_index_img' src={product.photoUrl}/></Link></li>
        <li className='index-productName'><Link to={`/products/${product.id}`} className="index-productName">{product.title}</Link></li>
        <li className='index productCost'>${(product.price)}</li>
        <button onClick={()=>deleteProduct(product.id)}>Delete</button>
      
    </li>);
};

export default ProductIndexItem;
