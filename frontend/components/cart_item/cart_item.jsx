import React from 'react';

class CartItem extends  React.Component{
    componentDidMount(){
        this.props.fetchCartItems()
    }
}


export default CartItem;