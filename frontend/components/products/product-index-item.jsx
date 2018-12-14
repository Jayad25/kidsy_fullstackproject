import React from 'react';
import { Link } from 'react-router-dom';

const ProductIndexItem = ({product}) => (
  <div>
   <ul>
       <li>{product.title}</li>
       <li>{product.description}</li>
       <li>{product.price}</li>
   </ul>
  </div>
);

export default ProductIndexItem;
