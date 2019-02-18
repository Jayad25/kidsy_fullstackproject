import React from 'react';


class ProductShow extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          quantity: null,
          shopping_cart_id: null,
          product_id: null
        };
        this.addToCart = this.addToCart.bind(this);
    }
   
    componentDidMount(){
        this.props.fetchProduct(this.props.match.params.productId) 
    }

    addToCart(e) {
        e.preventDefault()
      
        if (!this.props.currentUser) {
            this.props.openModal("login");
        } else {
            if (this.state.quantity) {
                this.state.shopping_cart_id = this.props.cartId
                this.props.createCartItem(this.state)
                window.alert(`${this.state.quantity} ${this.props.product.product_name}'s added to your cart!`)
            } else {
                window.alert("Please Select A Quantity")
            }
        }
    }

    clearErrors() {
        if (!this.props.errors) return null
        this.props.removeErrors()
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
                        <input type="text" className="quantity-input"
                        onChange={(e) => this.setState({quantity: parseInt(e.target.value), product_id: this.props.product.id})}
                        ></input>
                    </h4>
                   <div className="product-show-cart-div"> <button className="add-cart"  
                                onClick={e => this.addToCart(e)}
                   >Add to Cart</button>
                   </div>
                   <div className="shipping">
                   <li>Shipping</li>
                  <li>Get it fast! Ready to ship in 1–2 business days.</li></div>
                </div>
            </div>
                
            <div className="product-description"><h2 className="desc">Description:</h2>{this.props.product.description}</div>
            
        </div>
            )
        }else{
            return(<></>)
        }
    }
}

export default ProductShow;