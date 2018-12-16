import React from 'react';

class ProductShow extends React.Component{
   
    // componentDidMount(){ 
    //     this.props.fetchProduct(this.props.match.params.productId)
    // }

    render(){
        return(<div className="product_show">
                    <p>Product Details</p>
                <div className="product_img"><img className='product_img' src={this.props.product.img_url}/></div>
                <div className="product_details">
                    <div className="product-title-price">
                        {this.props.product.title}
                        {this.props.product.price}
                    </div>
                    <div className="product-description">{this.props.product.description}</div>
                </div>
            
        </div>
        )
    }
}

export default ProductShow;