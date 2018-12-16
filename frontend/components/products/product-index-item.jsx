import React from 'react';
import { Link } from 'react-router-dom';

const ProductIndexItem = ({product}) => (
  <div>
   <ul>
   <Link to={`/products/${product.id}`}>
       <li>{product.title}</li></Link>
       <li>bvakfdjbvidbvd</li>
       <li>{product.description}</li>
       <li>{product.price}</li>
   </ul>
  </div>
);

export default ProductIndexItem;
