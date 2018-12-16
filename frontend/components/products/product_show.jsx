import React from 'react';

class ProductShow extends React.Component{
    componentDidMount(){
        this.props.fetchProducts(this.props.match.params.productId)
    }
    render(){
        return(<>
            {this.props.product.title}
            {this.props.product.description}
            {this.props.product.price}
        </>)
    }
}

export default ProductShow;