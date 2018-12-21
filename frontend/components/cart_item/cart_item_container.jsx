import connect from 'react-redux';
import {fetchCartItems,deletecartItems} from '../../actions/cart_item_actions'
import cartItem from './cart_item'


const mapStateToProps = ({state,ownProps}) => {
    product : state.entities.products[oenProps.match.params.ProductId]
    cartItems:state.entites.cartItem
}

const mapDispatchToProps = dispatch => ({
    fetchCartItems: ()=>dispatch(fetchCartItems),
    deletecartItems: (id) => dispatch(deletecartItems(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(cartItem)