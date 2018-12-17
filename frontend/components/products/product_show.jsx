import React from 'react';

class ProductShow extends React.Component{
   
    componentDidMount(){ 
        console.log(this.props.match.params.productId)
        this.props.fetchProduct(this.props.match.params.productId)
        
    }


    render(){
        if(this.props.product){
            return(
            <div className="product_show">
                        <p>Product Details</p>
                    <div className="product_img"><img className='product_img' src={this.props.product.photoUrl}/></div>
                    <div className="product_details">
                        <div className="product-title-price">
                            {this.props.product.title}
                            {this.props.product.price}
                        </div>
                        <div className="product-description">{this.props.product.description}</div>
                    </div>
                
            </div>
            )
        }else{
            return(<></>)
        }
    }
}

export default ProductShow;