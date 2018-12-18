import React from 'react';
import { Link } from 'react-router-dom';

class ProductShow extends React.Component{
   
    componentDidMount(){
        this.props.fetchProduct(this.props.match.params.productId)
        
    }
    render(){
        if(this.props.product){
            return(
        <div className="product_show">
            <div className="top-dev">
                <div className="product_img"><img className='product_img' src={this.props.product.photoUrl}/>
                </div> 
                <div className="product_details">
                    <div className="product-title">
                        {this.props.product.title}
                    </div>
                    <div className="product-price">${this.props.product.price}
                    </div>
                    <h4 className="quantity-label">Quantity
                        <input type="text" className="quantity-input"></input>
                    </h4>
                   <div className="cart-div"> <button className="add-to-cart-button">Add to Cart</button>
                   </div>
                </div>
            </div>
                
            <div className="product-description"><h2 className="desc">Description:</h2>{this.props.product.description}</div>
            <Link to={`/products/${this.props.product.id}/edit`}>Edit</Link>
        </div>
            )
        }else{
            return(<></>)
        }
    }
}

export default ProductShow;